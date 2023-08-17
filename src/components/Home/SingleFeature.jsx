import React from "react";

const SingleFeature = ({ feature }) => {
  return (
    <>
      <div className="border rounded-lg p-4 ">
        <p className="text-4xl grid place-items-center">{feature.icon}</p>
        <h2 className="text-xl text-amber-400 grid place-items-center pb-3">
          {feature.caption}
        </h2>
        <p className="font-thin">{feature.details}</p>
      </div>
    </>
  );
};

export default SingleFeature;
