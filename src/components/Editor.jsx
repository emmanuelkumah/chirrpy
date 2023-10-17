import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { pdfExporter } from "quill-to-pdf";
import axios from "axios";

const Editor = () => {
  const localStorageData = localStorage.getItem("details");

  const [content, setContent] = useState(localStorageData);
  const [quillContent, setQuillContent] = useState();
  // const [isCheckingErrors, setIsCheckingErrors] = useState(false);
  const editorRef = useRef(null);

  const editorOptions = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ],
    },
    theme: "snow",
  };

  useEffect(() => {
    const editor = new Quill(editorRef.current, editorOptions);

    editor.setContents([{ insert: content }]);

    editor.on("text-change", () => handleEditorChange(editor));

    setQuillContent(editor);
  }, []);

  const handleEditorChange = (editor) => {
    setContent(editor.getContents().ops[0].insert);
  };

  //generate pdf
  const generatePDF = async () => {
    const pdfBlob = await pdfExporter.generatePdf(quillContent.getContents());
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  console.log(import.meta.env.VITE_API_KEY);
  //complet options
  const options = {
    method: "POST",
    url: "https://typewise-ai.p.rapidapi.com/correction/whole_sentence",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "typewise-ai.p.rapidapi.com",
    },
    data: {
      text: content,
      keyboard: "QWERTY",
      languages: ["en"],
    },
  };

  const correctSentence = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.corrected_text);
      const updatedText = response.data.corrected_text;
      if (response) {
        const editor = new Quill(editorRef.current, editorOptions);
        editor.setContents([{ insert: updatedText }]);
      }
      // setContent(response.data.corrected_text);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div ref={editorRef} />
      <div>{content}</div>
      <button onClick={correctSentence}>Correct Sentence </button>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
};

export default Editor;
