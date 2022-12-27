import { db } from "~/utils/db.server";
import { v4 as uuidv4 } from "uuid";
import FormData from "form-data";
import fs from "fs";
class DiscourseApi {
  DiscourseUrl: string;
  apiKey: string;
  constructor(url: string, api: string) {
    this.DiscourseUrl = url;
    this.apiKey = api;
  }

  authHeader(username: string) {
    let auth_headers = {
      "Api-Key": this.apiKey,
      "Api-Username": username,
      "Content-Type": "application/json",
    };
    return auth_headers;
  }

  async fetchCategoryList(id: string | undefined) {
    const res = await fetch(
      `${this.DiscourseUrl}/categories.json?include_subcategories=true`
    );
    const categories = await res.json();
    const filterCategory = categories.category_list.categories.find(
      (l) => l?.id === parseInt(id)
    );
    if (!filterCategory.subcategory_ids.length) return null;
    return filterCategory.subcategory_list;
  }
  async fetchposts(topicId: number) {
    if (topicId) {
      const res = await fetch(`${this.DiscourseUrl}/t/${topicId}/posts.json`);
      const data = await res.json();
      return data;
    }
  }
  async fetchPostReplies(postId: number) {
    if (postId) {
      const res = await fetch(
        `${this.DiscourseUrl}/posts/${postId}/replies.json`
      );
      const data = await res.json();
      return data;
    }
  }
  async addCategory(
    username: string,
    categoryName: string,
    parent_category_id: number
  ) {
    let auth_headers = this.authHeader(username);
    var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    let newCategoryData = {
      name: categoryName.slice(0, 40) + "..",
      color: randomColor(),
      text_color: randomColor(),
      parent_category_id,
    };
    let params = new URLSearchParams(newCategoryData).toString();
    try {
      const response = await fetch(
        `${this.DiscourseUrl}/categories.json?` + params,
        {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin",
          headers: auth_headers,
        }
      );
      let res = await response.json();
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async addTopic(
    username: string,
    category_id: number,
    start: number,
    end: number,
    topic_name: string | FormDataEntryValue,
    bodyContent: string | FormDataEntryValue,
    textId: number
  ) {
    let auth_headers = this.authHeader(username);
    let questionId = uuidv4();
    let post_text = `<div>
    <blockquote>${topic_name}</blockquote>
    <div>
<p>${bodyContent}</p>
<br/>
<iframe width="150" height="90" src="${process.env.ORIGIN_LOCATION}/embed/${questionId}"
></iframe><div>`;
    if (topic_name.length > 20) topic_name = topic_name.slice(0, 19) + "...";
    let new_Topic_data = {
      title: topic_name.toString(),
      category: category_id,
      raw: post_text,
    };
    let params = new URLSearchParams(new_Topic_data).toString();
    let user = await db.user.findUnique({
      where: {
        username,
      },
    });
    let data;
    try {
      const response = await fetch(
        `${this.DiscourseUrl}/posts.json?` + params,
        {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin",
          headers: auth_headers,
        }
      );
      data = await response.json();
      if (data["topic_id"] > 0 && user) {
        const createQuestion = await db.question.create({
          data: {
            id: questionId,
            topicId: data["topic_id"],
            postId: data.id,
            topic: topic_name.toString(),
            userId: user.id,
            categoryId: category_id,
            start,
            end,
            textId,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }

    return data;
  }
  async deleteTopic(id: number, username: string) {
    let auth_headers = this.authHeader(username);
    try {
      const response = await fetch(`${this.DiscourseUrl}/t/${id}.json`, {
        method: "DELETE",
        headers: auth_headers,
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
  async uploadFile(username: string, formData: any) {
    let auth_headers = this.authHeader(username);

    try {
      let res = await fetch(`${this.DiscourseUrl}/uploads.json`, {
        method: "post",
        headers: { ...auth_headers, "Content-Type": "multipart/form-data" },
        body: formData,
      });
      console.log(res);
    } catch (e) {
      console.log("upload Failed" + e.message);
    }
  }
}

let DiscourseUrl = process.env.DISCOURSE_SITE;
let api = process.env.DISCOURSE_API_KEY;

export async function createQuestion(
  userName: string,
  textName: FormDataEntryValue | null,
  QuestionArea: FormDataEntryValue | null,
  bodyContent: FormDataEntryValue | null,
  start: FormDataEntryValue | null,
  end: FormDataEntryValue | null,
  parent_category_id: string,
  textId: number
) {
  if (!start || !end) {
    throw new Error("start and end values not available");
  }
  if (!textName || !QuestionArea || !bodyContent)
    throw new Error("failed to access Topic Id");
  if (!DiscourseUrl || !api) throw new Error("asign api and url  in env");

  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  let response = await apiObj.fetchCategoryList(parent_category_id);
  let checkIfCategoryPresent = response?.find(
    (l: any) => l.name === textName.slice(0, 40) + ".."
  );
  if (!checkIfCategoryPresent) {
    let res = await apiObj.addCategory(
      userName,
      textName.toString(),
      parseInt(parent_category_id)
    );
    checkIfCategoryPresent = {
      id: res.category?.id,
    };
  }
  return apiObj.addTopic(
    userName,
    checkIfCategoryPresent.id,
    parseInt(start.toString()),
    parseInt(end.toString()),
    QuestionArea,
    bodyContent,
    textId
  );
}

export async function deleteQuestion(userName: string, topicId: number) {
  if (!DiscourseUrl || !api) throw new Error("asign api and url  in env");
  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  const res = apiObj.deleteTopic(topicId, userName);
  return res;
}

export async function getposts(topicId: number) {
  if (!DiscourseUrl || !api) throw new Error("asign api and url  in env");

  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  const res = apiObj.fetchposts(topicId);
  console.log(res);
  return res;
}
export async function getpostreplies(topicId: number) {
  if (!DiscourseUrl || !api) throw new Error("asign api and url  in env");
  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  const res = apiObj.fetchPostReplies(topicId);
  return res;
}
export async function uploadFile(username: string, formData: any) {
  if (!DiscourseUrl || !api) throw new Error("asign api and url  in env");
  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  const res = apiObj.uploadFile(username, formData);
  return res;
}
export default DiscourseApi;
