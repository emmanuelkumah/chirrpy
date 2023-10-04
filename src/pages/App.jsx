import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { recognition } from "../services/speechRecognition";
import { Link } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const App = () => {
  const [status, setStatus] = useState("Click the microphone to get started");
  const [content, setContent] = useState("");

  recognition.continous = true;
  // recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    setStatus("Voice recognition activated. Try speaking into the microphone.");
  };
  recognition.onspeechend = () => {
    setStatus(
      "You were quiet for a while so voice recognition turned itself off."
    );
  };
  recognition.onerror = (e) => {
    if (e.error === "no--speech") {
      setStatus("No speech detected try again");
    }
  };
  const startRecordingHandler = () => {
    // if (content.length) {
    //   content += " ";
    // }
    recognition.start();
  };

  //get resutls
  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    const mobileRepeatBug =
      current == 1 && transcript == e.results[0][0].transcript;
    if (!mobileRepeatBug) {
      setContent((content) => `${content} ${transcript}`);
    }
    //append to content
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <section className="mt-[15%]">
        <div>
          <h3>Create notes with your voice</h3>
          <p>{status}</p>
          <textarea
            name="voicenote"
            id=""
            cols="60"
            rows="10"
            value={content}
            onChange={contentChangeHandler}
          ></textarea>
          <div className="flex gap-4">
            <button
              className="bg-emerald-400 p-5"
              onClick={startRecordingHandler}
            >
              Start Recording
            </button>
            <button className="bg-red-400 p-5">Pause</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
