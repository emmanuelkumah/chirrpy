import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <section>
        <h2>Opps! You ended up at the wrong side of the bed</h2>
        <p>{error.message || error.statusText}</p>
      </section>
    </>
  );
};

export default ErrorPage;
