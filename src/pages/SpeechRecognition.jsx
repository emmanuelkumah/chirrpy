import React, { useState, useEffect } from "react";
import axios from "axios";

import { recognition } from "../services/speechRecognition";
import { Link, useOutletContext } from "react-router-dom";
import "quill/dist/quill.snow.css";

const SpeechRecogntion = () => {
  const [status, setStatus] = useState("Click the microphone to get started");
  const [hasUpdated, setHasUpdated] = useState(false);
  const [content, setContent] = useOutletContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("details", content);
  }, [content]);

  // useEffect(() => {
  //   // connectAPI();
  //   //languageToolsChecker();
  // }, []);

  //start recognition
  recognition.onstart = () => {
    setStatus("Voice recognition activated. Try speaking into the microphone.");
  };

  //end
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
  };

  //get results of audio recording
  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    const fixRepeatBug =
      current == 1 && transcript == e.results[0][0].transcript;
    if (!fixRepeatBug) {
      setContent((content) => `${content} ${transcript}`);
      setHasUpdated(true);
    }
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
            onChange={(e) => setContent(e.target.value)}
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

export default SpeechRecogntion;
