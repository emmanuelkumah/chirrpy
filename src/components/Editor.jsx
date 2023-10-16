import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { pdfExporter } from "quill-to-pdf";

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

  return (
    <>
      <div ref={editorRef} />
      <div>{content}</div>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
};

export default Editor;
