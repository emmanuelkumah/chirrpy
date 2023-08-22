import React, { useState, useRef } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { TfiSave } from "react-icons/tfi";
import ReactQuill from "react-quill";
//import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

import getSpeechRecognitionAPI from "../services/speechRecognition";

const Main = () => {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Click the microphone to get started");
  const [text, setText] = useState("");

  //console.log(transcript);
  let updatedEditor;
  let getTranscript;

  //React Quill
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const defaultStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    color: "#000",
  };

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
    console.log(current);

    //noteContent = noteContent + transcript;

    setText(e.results[current][0].transcript);

    // if (text.length > 1) {
    //   const updateTranscribe = text + transcript;
    //   setTranscript(updateTranscribe);
    // } else {
    //   setTranscript(transcript);
    // }
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
  const contentInputHandler = (editor) => {
    console.log(editor);
    //console.log(editor.getText());
    //const innerContent = editor.innerText;
    setText(editor);
  };
  return (
    <>
      <section>
        <h2 className="text-2xl py-4">
          Create editable content with your voice
        </h2>

        <section>
          <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Start typing or click on the mic to speak"
            style={defaultStyle}
            value={text}
            onChange={contentInputHandler}
            // onFocus={focus()}
          />
          <p>{status}</p>
          <div className="flex flex-row justify-around mt-4">
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
          <h2>{library}</h2>
        </section>
      </section>
    </>
  );
};

export default Main;
