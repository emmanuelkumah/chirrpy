import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { recognition } from "../services/speechRecognition";
import { Link } from "react-router-dom";

const App = () => {
  const [status, setStatus] = useState("Click the microphone to get started");
  const [text, setText] = useState("");

  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  const startVoiceRecongnition = () => {
    recognition.onstart = () => {
      setStatus("listening...");
    };
    recognition.start();
  };

  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

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

  const pauseVoiceRecognition = () => {
    recognition.onspeechend = () => {
      recognition.stop();
      console.log("Speech recognition has stopped.");
    };
  };

  return (
    <>
      <section className="mt-[15%]">
        <div>
          <h3>Create notes with your voice</h3>
        </div>
        <div
          className="relative bg-emerald-600 rounded-full w-20 h-20"
          onClick={startVoiceRecongnition}
        >
          <span className="absolute top-6 left-6 text-3xl">
            <FaMicrophone />
          </span>
        </div>
        <div>
          <p>{status}</p>
        </div>
        <textarea
          className="text-black p-4 overflow-y-auto"
          name="transcript"
          id=""
          cols="30"
          rows="10"
          value={text}
        />
        <div>
          <Link to="/chirrpy/apps/editor">
            <button className="bg-emerald-500 py-3 px-4 rounded-md">
              Edit Text
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default App;
