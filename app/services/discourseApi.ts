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

  async addTopic(
    username: string,
    category_id: number,
    topic_name: string | FormDataEntryValue,
    start: number,
    end: number,
    QuestionArea: string | FormDataEntryValue,
    bodyContent: string | FormDataEntryValue
  ) {
    let auth_headers = this.authHeader(username);
    let post_text = `<blockquote>${QuestionArea}</blockquote><br/>${bodyContent}`;
    console.log(post_text);
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
            userId: user.id,
            start,
            end,
            topic: QuestionArea,
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

export default DiscourseApi;
