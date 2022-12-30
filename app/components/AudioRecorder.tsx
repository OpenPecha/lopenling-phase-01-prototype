// import Vote from "./Vote";

import { useFetcher, useLoaderData } from "@remix-run/react";
import ReactAudioPlayer from "react-audio-player";

export default function AudioList({ editor }: any) {
  const { audio } = useLoaderData();
  const audioFetcher = useFetcher();

  return audio.map((audio, index) => {
    return (
      <div key={index}>
        text-{audio.witnessId} start-{audio.start} length-{audio.length}
        <ReactAudioPlayer src={audio.base64} controls />
        <audioFetcher.Form method="post" action="/api/audio">
          <input hidden name="id" defaultValue={audio.id} />
          <button
            name="action"
            value="delete"
            type="submit"
            disabled={
              audioFetcher.state !== "idle" &&
              audioFetcher.submission?.formData.get("id") ===
                audio.id.toString()
            }
          >
            delete
          </button>
        </audioFetcher.Form>
      </div>
    );
  });
}
