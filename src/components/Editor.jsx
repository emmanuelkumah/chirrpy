import React, { useState, useRef, useEffect } from "react";
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import Quill from "quill";

import { pdfExporter } from "quill-to-pdf";

const Editor = () => {
  const storedContent = localStorage.getItem("details");
  const [editContent, setEditContent] = useState(storedContent);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const quillEditor = new Quill("#quill-editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
      placeholder: "Compose an epic...",
      theme: "snow", // or 'bubble'
    });
    setEditor(quillEditor);
  }, []);

  //update the content in local storage
  useEffect(() => {
    localStorage.setItem("details", editContent);
  }, [editContent]);

  const generatePDF = async () => {
    const pdfBlob = await pdfExporter.generatePdf(editor.getContents());
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };
  return (
    <>
      <div id="quill-editor">{editContent}</div>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
};

export default Editor;
