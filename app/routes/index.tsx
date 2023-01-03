import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import {
  Link,
  useFetcher,
  useFetchers,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { db } from "~/utils/db.server";
import React, { useMemo } from "react";
import { getUserSession } from "../services/session.server";
import { getTextList } from "~/services/getText.server";
import indrajalaLogo from "../file/indrajalaLogo.png";
type dataType = {
  user: any;
  message: string;
  textList: { id: number; name: string }[] | undefined;
  questionList: any;
};
export const loader: LoaderFunction = async ({
  request,
}): Promise<dataType | undefined> => {
  let textList: { id: number; name: string }[] | undefined;
  let userinFo: any;
  let message: string = "";
  let questionList;
  const user = await getUserSession(request);
  if (user?.email) {
    try {
      let findUserInDatabase = await db.user.findUnique({
        where: { email: user.email },
      });
      userinFo = findUserInDatabase;
    } catch (e) {
      if (e) message = JSON.stringify(e);
    }
  }
  textList = await getTextList();
  try {
    questionList = await db.question.findMany({
      include: {
        createrUser: true,
        likes: true,
        dislikes: true,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return { user: userinFo, message, textList, questionList };
};

export default function Index() {
  const data = useLoaderData();
  const searchedText = useFetcher();

  const list = useMemo(() => searchedText.data, [searchedText.data]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          padding: 20,
          maxHeight: "50vh",
        }}
      >
        <div className="textList">
          <h1>Available Text</h1>
          <searchedText.Form method="get" action="/api/text-search">
            <input
              type="text"
              name="textSearch"
              placeholder="search text"
            ></input>
            <button
              type="submit"
              style={{
                background: searchedText.state === "idle" ? "#eee" : "#ccc",
              }}
            >
              search
            </button>
          </searchedText.Form>
          {list && (
            <div
              style={{
                maxHeight: 300,
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              {list.length === 0 && (
                <div style={{ color: "red" }}>No result found</div>
              )}
              {list?.map((list: { id: number; name: string }) => {
                return (
                  <p key={"textList-" + list.id}>
                    <Link to={"/texts/" + list.id} key={list.id}>
                      {list.name}
                    </Link>
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          margin: "0 auto",
          background: "#888",
          minWidth: "100%",
        }}
      >
        <center>
          <img
            src={indrajalaLogo}
            style={{ maxHeight: 40, objectFit: "contain" }}
          ></img>
        </center>
      </footer>
    </div>
  );
}
