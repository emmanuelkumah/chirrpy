import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { TfiSave } from "react-icons/tfi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import getSpeechRecognitionAPI from "../services/speechRecognition";

const Main = () => {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Waiting to hear your voice");
  const recognition = getSpeechRecognitionAPI();

  recognition.continous = true;
  //interim result
  recognition.interimResults = true;
  //language
  recognition.lang = "en-US";

  const startSpeechRecognitionHandler = () => {
    //run on start event
    recognition.onstart = () => {
      setStatus("Speech recognition service has started");
    };
    recognition.start();
  };
  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    setTranscript(transcript);
  };
  //error
  recognition.onerror = function (event) {
    if (event.error === "no-speech") {
      console.log("no speech detected");
    }
  };

  const stopSpeechRecognitionHandler = () => {
    recognition.stop();
    //get resutls
  };

  const saveContentHandler = () => {
    recognition.stop();
    saveText(new Date().toLocaleString, transcript);
  };

  const saveText = (dateTime, content) => {
    setStatus("content saved ");
    localStorage.setItem("chir", content);
  };

  const displaySavedContent = () => {
    const result = localStorage.getItem("chir");

    return result;
    console.log(result);
  };

  const library = displaySavedContent();
  return (
    <>
      <section>
        <h2 className="text-3xl py-4">
          Create editable content with your voice
        </h2>

        <section>
          <ReactQuill theme="snow" value={transcript} />
          <p>{status}</p>
          <div className="flex flex-col gap-4 mt-4">
            <button
              className="flex bg-emerald-400 py-2 px-3 gap-2 rounded-lg"
              onClick={startSpeechRecognitionHandler}
            >
              Start talking
              <FaMicrophone />
            </button>
            <button
              className="flex bg-red-500 py-2 px-3 gap-2 rounded-lg "
              onClick={stopSpeechRecognitionHandler}
            >
              Stop talking
              <FaMicrophoneSlash />
            </button>
            <button
              className="flex bg-amber-500 py-2 px-3 gap-2 rounded-lg"
              onClick={saveContentHandler}
            >
              Save note
              <TfiSave />
            </button>
          </div>
          <h2>{library}</h2>
        </section>
      </section>
    </>
  );
};

export default Main;
