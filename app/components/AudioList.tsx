import { LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";

function AudioList() {
  const data = useLoaderData();
  console.log(data.audio);
  return (
    <div>
      {data?.audio.map((file, index) => {
        return (
          <div key={file.id}>
            <address>
              {file.start}-{file.start + file.length}
            </address>
            <audio controls>
              <source src={file.url}></source>
            </audio>
          </div>
        );
      })}
    </div>
  );
}
export default AudioList;
