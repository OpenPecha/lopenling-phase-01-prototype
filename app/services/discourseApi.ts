import { db } from "~/utils/db.server";

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
      (l) => l.id === parseInt(id)
    );
    if (!filterCategory.subcategory_ids.length) return null;
    return filterCategory.subcategory_list;
  }
  async addCategory(
    username: string,
    categoryName: string,
    categoryColor: string,
    text_color: string,
    parent_category_id: number
  ) {
    let auth_headers = this.authHeader(username);

    let newCategoryData = {
      name: categoryName,
      color: categoryColor,
      text_color,
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
    let post_text = `<br/>${bodyContent}`;
    let new_Topic_data = {
      title: topic_name,
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
            topicId: data["topic_id"],
            topic: topic_name,
            userId: user.id,
            categoryId: category_id,
            start,
            end,
            textId,
          },
        });
        console.log(createQuestion);
      }
    } catch (e) {
      console.log(e);
    }

    return data;
  }
}

export async function createQuestion(
  userName: string,
  textName: FormDataEntryValue | null,
  QuestionArea: FormDataEntryValue | null,
  bodyContent: FormDataEntryValue | null,
  start: FormDataEntryValue | null,
  end: FormDataEntryValue | null,
  DiscourseUrl: string,
  api: string,
  parent_category_id: string,
  textId: number
) {
  if (!start || !end) {
    throw new Error("start and end values not available");
  }
  if (!textName || !QuestionArea || !bodyContent)
    throw new Error("failed to access Topic Id");
  const apiObj: DiscourseApi = new DiscourseApi(DiscourseUrl, api);
  let response = await apiObj.fetchCategoryList(parent_category_id);
  let checkIfCategoryPresent = response?.find((l) => l.name === textName);
  if (!checkIfCategoryPresent) {
    let res = await apiObj.addCategory(
      userName,
      textName.toString(),
      "red",
      "black",
      parseInt(parent_category_id)
    );
    return apiObj.addTopic(
      userName,
      res.category.id,
      parseInt(start.toString()),
      parseInt(end.toString()),
      QuestionArea,
      bodyContent,
      textId
    );
  } else {
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
}

export default DiscourseApi;
