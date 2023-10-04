import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const Editor = () => {
  const { quill, quillRef } = useQuill();
  const [savedText, setSavedText] = useState("");

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
    }
  }, [quill]);

  const handleSave = () => {
    const text = quill.getText();
    setSavedText(text);
  };

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
  //   }
  // }, [quill]);

  console.log(quill);
  console.log(quillRef);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <button onClick={handleSave}>Save</button>
      <div>Saved state: {savedText}</div>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
