import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useOutletContext } from "react-router-dom";

const Editor = () => {
  // const { quill, quillRef } = useQuill();
  // const [savedText, setSavedText] = useState("");
  //const [count, setCount] = useOutletContext();
  const [content, setContent] = useOutletContext();

  const displayTranscribe = localStorage.getItem("transcribe");

  // useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
  //   }
  // }, [quill]);

  // const handleSave = () => {
  //   const text = quill.getText();
  //   setSavedText(text);
  // };

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
  //   }
  // }, [quill]);

  // console.log(quill);
  // console.log(quillRef);

  return (
    <>
      <h1 className="text-3xl">{displayTranscribe}</h1>

      {/* <div style={{ width: "100%", height: 300 }}>
        <button onClick={handleSave}>Save</button>
        <div>Saved state: {savedText}</div>
        <div ref={quillRef} />
      </div> */}
    </>
  );
};

export default Editor;
