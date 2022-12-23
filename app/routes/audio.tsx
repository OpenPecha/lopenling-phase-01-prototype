import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ReactAudioPlayer from "react-audio-player";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  try {
    let audio = await db.audio.findMany();
    return audio;
  } catch (e) {
    console.log(e);
  }
};

export default function AudioPage() {
  const loaderData = useLoaderData();
  return (
    <div>
      {loaderData.map((audio, index) => {
        return (
          <div key={index}>
            text-{audio.witnessId} start-{audio.start} length-{audio.length}
            <ReactAudioPlayer src={audio.base64} controls />
          </div>
        );
      })}
    </div>
  );
}
