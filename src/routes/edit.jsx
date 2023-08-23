import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Edit = () => {
  //React Quill
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const defaultStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    color: "#000",
  };
  return (
    <>
      <div className="mt-[12%]">
        <ReactQuill
          modules={modules}
          theme="snow"
          style={defaultStyle}
          value="Testing"
        />
      </div>
    </>
  );
};

export default Edit;
