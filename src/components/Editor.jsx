import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOutletContext } from "react-router-dom";

const Editor = () => {
  const storedContent = localStorage.getItem("details");
  const [editContent, setEditContent] = useState(storedContent);

  //update the content in local storage
  useEffect(() => {
    localStorage.setItem("details", editContent);
  }, [editContent]);

  console.log(editContent);

  return (
    <>
      <p>{editContent}</p>
      <ReactQuill theme="snow" value={editContent} onChange={setEditContent} />
      <div className="flex gap-3 mt-7">
        <button className="bg-red-400 py-3">Save Content</button>
        <button>Download</button>
      </div>
    </>
  );
};

export default Editor;
