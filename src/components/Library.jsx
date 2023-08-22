import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HamburgerDrawer from "react-hamburger-drawer";
import { Link } from "react-router-dom";

const Library = () => {
  const result = localStorage.getItem("chir");

  return (
    <div>
      <div className="pt-[25%]">
        <ReactQuill readOnly={true} theme="snow" value={result} />
        <div>Download content</div>
      </div>
    </div>
  );
};

export default Library;
