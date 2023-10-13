import React, { useState, useEffect } from "react";
import Quill from "quill";
import { pdfExporter } from "quill-to-pdf";

const Editor = () => {
  const storedContent = localStorage.getItem("details");
  const [editContent, setEditContent] = useState(storedContent);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const quillEditor = new Quill("#quill-editor", {
      modules: {
        toolbar: true,
      },
      theme: "snow",
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
