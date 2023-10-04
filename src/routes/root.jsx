import Navigation from "../components/Home/Navigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = () => {
  // const [count, setCount] = useState(9);
  const [content, setContent] = useState("");

  return (
    <>
      <Navigation />
      <Outlet context={[content, setContent]} />
    </>
  );
};

export default Root;
