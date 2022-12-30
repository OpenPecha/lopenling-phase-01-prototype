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
  const submit = (e) => {
    audioFetcher.submit(
      {
        file: blob,
        type: "composer",
        start,
        length: end - start,
        witnessId: data.text.id,
      },
      { method: "post", action: "api/audio", encType: "multipart/form-data" }
    );
  };
  return (
    <div style={{ borderRadius: 20, backgroundColor: "#e2e" }}>
      {audioURL && <ReactAudioPlayer src={audioURL} controls />}
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
