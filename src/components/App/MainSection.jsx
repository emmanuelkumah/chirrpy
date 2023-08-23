import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { TfiSave } from "react-icons/tfi";

import "react-quill/dist/quill.snow.css";
import getSpeechRecognitionAPI from "../../services/speechRecognition";
import AppHeading from "./AppHeading";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Click the microphone to get started");
  const [text, setText] = useState("");

  const recognition = getSpeechRecognitionAPI();

  recognition.continous = true;
  //interim result
  recognition.interimResults = true;
  //language
  recognition.lang = "en-US";

  const startSpeechRecognitionHandler = () => {
    //run on start event
    recognition.onstart = () => {
      setStatus("Listening...");
    };

    recognition.start();
  };
  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    //add current content to the transcript
    console.log(transcript);
    setText(transcript);
  };
  //error
  recognition.onerror = function (event) {
    if (event.error === "no-speech") {
      setStatus("no speech detected");
    }
  };
  //speech end
  recognition.onspeechend = function () {
    setStatus(
      "You were quiet for a while, so the voice recognition was turned off"
    );
  };
  const stopSpeechRecognitionHandler = () => {
    recognition.stop();
    //get resutls
  };

  const saveContentHandler = () => {
    recognition.stop();
    saveText(new Date().toLocaleString, text);
  };

  const saveText = (dateTime, text) => {
    setStatus("content saved ");
    console.log(text);
    localStorage.setItem("chir", text);
  };

  const displaySavedContent = () => {
    const result = localStorage.getItem("chir");

    return result;
    console.log(result);
  };

  const library = displaySavedContent();
  //handle content input

  return (
    <>
      <main className="md:flex-1">
        <AppHeading />
        <div className="flex flex-row justify-around my-4">
          <div
            class="relative w-12 h-12 bg-emerald-600 rounded-full "
            onClick={startSpeechRecognitionHandler}
          >
            <span className="absolute top-[15%] left-[20%] text-3xl">
              <FaMicrophone />
            </span>
          </div>
          <div
            class="relative w-12 h-12 bg-red-600 rounded-full "
            onClick={stopSpeechRecognitionHandler}
          >
            <span className="absolute top-[15%] left-[20%] text-3xl">
              <FaMicrophoneSlash />
            </span>
          </div>
          <div
            class="relative w-12 h-12 bg-emerald-400 rounded-full "
            onClick={saveContentHandler}
          >
            <span className="absolute top-[15%] left-[20%] text-3xl">
              <TfiSave />
            </span>
          </div>
        </div>
        <div>
          <textarea
            name="transcript"
            id=""
            cols="30"
            rows="5"
            value={text}
            className="overflow-y-auto p-5 bg-transparent rounded-lg"
          />
          {/* <Link to="editor">
            <button className="bg-emerald-400 py-2 px-5 mt-4 rounded-lg">
              Edit Text
            </button>
          </Link> */}
        </div>

        <p>{status}</p>
      </main>
    </>
  );
};

export default MainSection;
