import React, { useState, useEffect } from "react";
import axios from "axios";

import { recognition } from "../services/speechRecognition";
import { Link, useOutletContext } from "react-router-dom";
// import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const SpeechRecogntion = () => {
  const [status, setStatus] = useState("Click the microphone to get started");
  const [hasUpdated, setHasUpdated] = useState(false);
  //get context data
  const [content, setContent] = useOutletContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("details", content);
  }, [content]);

  //grammer
  const encodedParams = new URLSearchParams();
  encodedParams.set("text", "Him pencl is un the table");

  const options = {
    method: "POST",
    url: "https://textgears-textgears-v1.p.rapidapi.com/grammar",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "b83c549ad8msh7858eac60fba4c7p1c2c58jsnd1c568e3a836",
      "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  useEffect(() => {
    connectAPI();
  }, []);

  const connectAPI = async () => {
    try {
      const response = await axios.request(options);
      //console.log(response.data.response.errors);

      //const data = (response.data.response.errors);
      setData(response.data.response.errors);
    } catch (error) {
      console.error(error);
    }
  };

  //grammar
  //  console.log(data);
  const fetchCorrectedGrammar = data.map((item) => item.better[0]);

  console.log(fetchCorrectedGrammar.join(" "));
  recognition.continous = true;
  recognition.lang = "en-US";

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
