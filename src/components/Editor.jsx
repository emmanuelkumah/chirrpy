import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { pdfExporter } from "quill-to-pdf";
import axios from "axios";

const Editor = () => {
  const storedContent = localStorage.getItem("details");

  const [content, setContent] = useState(storedContent);
  const [quillContent, setQuillContent] = useState();
  const editorRef = useRef(null);

  const quillOptions = {
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
    const editor = new Quill(editorRef.current, quillOptions);
    editor.setContents([{ insert: content }]);

    editor.on("text-change", () => handleTextChange(editor));

    setQuillContent(editor);

    //correnct sentene
    // correctSentence();
  }, []);

  const handleTextChange = (editor) => {
    setContent(editor.getContents().ops[0].insert);
  };

  //generate pdf
  const generatePDF = async () => {
    const pdfBlob = await pdfExporter.generatePdf(quillContent.getContents());
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  //complet options
  const options = {
    method: "POST",
    url: "https://typewise-ai.p.rapidapi.com/correction/whole_sentence",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "b83c549ad8msh7858eac60fba4c7p1c2c58jsnd1c568e3a836",
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
