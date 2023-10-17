import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { pdfExporter } from "quill-to-pdf";
import axios from "axios";
import toolbarOptions from "../utils/editorToolbarOptions";

const Editor = () => {
  const localStorageData = localStorage.getItem("details");

  const [content, setContent] = useState(localStorageData);
  const [quillContent, setQuillContent] = useState();
  const [copyText, setCopyText] = useState();
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      modules: {
        toolbar: toolbarOptions,
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true,
        },
      },
      theme: "snow",
    });
    editor.setContents([{ insert: content }]);
    editor.on("text-change", () => handleEditorChange(editor));
  }, []);

  const handleEditorChange = (editor) => {
    setContent(editor.getContents().ops[0].insert);
    setQuillContent(editor);
  };

  //copy content
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  //generate pdf
  const generatePDF = async () => {
    const pdfBlob = await pdfExporter.generatePdf(quillContent.getContents());
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  //correct grammar errors in editor
  const correctSentence = async () => {
    try {
      const response = await axios.request({
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
      });
      const updatedText = response.data.corrected_text;
      if (response) {
        const editor = new Quill(editorRef.current, {
          modules: {
            toolbar: toolbarOptions,
            history: {
              delay: 2000,
              maxStack: 500,
              userOnly: true,
            },
          },
          theme: "snow",
        });
        editor.setContents([{ insert: updatedText }]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div ref={editorRef} />
      <button onClick={correctSentence}>Correct Sentence </button>
      <button onClick={generatePDF}>Generate PDF</button>
      <button onClick={handleCopyToClipboard}>Copy text</button>
    </>
  );
};

export default Editor;
