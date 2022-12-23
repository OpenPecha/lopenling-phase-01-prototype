import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import { uploadFile } from "~/services/discourseApi";
import ReactAudioPlayer from "react-audio-player";
import useRecorder from "~/services/useRecorder";
export default function AddAudio({ start, end }: any) {
  const data = useLoaderData();
  const audioFetcher = useFetcher();
  const [blob, audioURL, isRecording, startRecording, stopRecording] =
    useRecorder();
  const [binary, setbinary] = React.useState();

  React.useEffect(() => {
    if (audioURL) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64String = reader.result;
        setbinary(base64String.substr(base64String.indexOf(", ") + 1));
        console.log("Base64 String without Tags- ", base64String);
      };
    }
  }, [audioURL]);
  const submit = () => {
    let dataPost = {
      textId: data.text.id,
      start,
      length: end - start,
      binary,
      userId: data.user.id,
      action: "create",
    };
    audioFetcher.submit(dataPost, { method: "post", action: "/api/audio" });
  };
  return (
    <div style={{ borderRadius: 20, backgroundColor: "#e2e" }}>
      {binary && <ReactAudioPlayer src={binary} controls />}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={startRecording} disabled={isRecording}>
          🔴record
        </button>
        <button onClick={stopRecording} disabled={!isRecording}>
          stop recording
        </button>
      </div>
      <button onClick={submit}>upload</button>
    </div>
  );
}
