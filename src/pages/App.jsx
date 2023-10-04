import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { recognition } from "../services/speechRecognition";
import { Link, useOutletContext } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const App = () => {
  const [status, setStatus] = useState("Click the microphone to get started");
  const [hasUpdated, setHasUpdated] = useState(false);
  //get context data
  const [content, setContent] = useOutletContext();

  recognition.continous = true;
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
    recognition.start();
  };

  const saveRecordingHandler = () => {
    if (!content) {
      setStatus("Could not save empty note. Please add a message");
    }
    recognition.stop();
    saveContent();
  };

  //get resutls
  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    const mobileRepeatBug =
      current == 1 && transcript == e.results[0][0].transcript;
    if (!mobileRepeatBug) {
      setContent((content) => `${content} ${transcript}`);
      setHasUpdated(true);
    }
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const saveContent = () => {
    hasUpdated && localStorage.setItem("transcribe", content);
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
            <Link to="editor">
              <button className="bg-green-400" onClick={saveRecordingHandler}>
                Save & Edit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
