import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Trix from "trix";
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

  return (
    <>
      <section>
        <h2>Record voice note</h2>
        <section>
          <p>Saved Notes here </p>
        </section>
        <section>
          <div>
            <p>{status}</p>
            <p>Click on the microphone icon to startrecording</p>
          </div>
          <button
            className="flex bg-emerald-400 py-2 px-3 gap-2 rounded-lg"
            onClick={startSpeechRecognitionHandler}
          >
            Start recording
            <FaMicrophone />
          </button>

          <div>
            <button
              className="bg-red-500 py-2 px-3 gap-2 rounded-lg "
              onClick={stopSpeechRecognitionHandler}
            >
              Stop recogniton
            </button>
          </div>
          <ReactQuill theme="snow" value={transcript} />
        </section>
      </section>
    </>
  );
};

export default Main;
