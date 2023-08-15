import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import getSpeechRecognitionAPI from "../services/speechRecognition";

const Main = () => {
  const recognition = getSpeechRecognitionAPI();
  recognition.continous = true;
  //interim result
  recognition.interimResults = true;
  //language
  recognition.lang = "en-US";

  const startSpeechRecognitionHandler = () => {
    recognition.onstart = () => {
      console.log("Speech recognition service has started");
    };
    recognition.start();

    //get resutls
    recognition.onresult = (e) => {
      console.log(e.results[0][0].transcript);
    };
  };
  const stopSpeechRecognitionHandler = () => {
    recognition.stop();
  };

  return (
    <>
      <section>
        <h2>Record voice note</h2>
        <section>
          <p>Saved Notes here </p>
        </section>
        <section>
          <p>Click on the microphone icon to startrecording</p>

          <button
            className="flex bg-red-500 py-2 px-3 gap-2 rounded-lg"
            onClick={startSpeechRecognitionHandler}
          >
            Start recording
            <FaMicrophone />
          </button>
          <button onClick={stopSpeechRecognitionHandler}>
            Stop recogniton
          </button>
          <div>Recording content goes here</div>
        </section>
      </section>
    </>
  );
};

export default Main;
