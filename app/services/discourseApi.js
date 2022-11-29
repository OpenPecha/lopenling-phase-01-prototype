import axios from "axios";

class DiscourseApi {
  constructor(url, api) {
    this.DiscourseUrl = url;
    this.apiKey = api;
  }

  authHeader(username) {
    let auth_headers = {
      "Api-Key": this.apiKey,
      "Api-Username": username,
      "Content-Type": "application/json",
    };
    return auth_headers;
  }

  async addTopic(username, category_id, topic_name, post_text) {
    let auth_headers = this.authHeader(username);
    let new_Topic_data = {
      title: topic_name,
      category: category_id,
      raw: post_text,
    };
    let params = new URLSearchParams(new_Topic_data).toString();
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
    } catch (e) {
      console.log(e);
    }

    return data;
  }
}

export default DiscourseApi;
