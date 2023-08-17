import React from "react";

import shape3 from "../../assets/shape3.png";
import SingleFeature from "./SingleFeature";
import features from "../../utils/features";

const Features = () => {
  const displayFeatures = features.map((feature) => (
    <SingleFeature key={feature.id} feature={feature} />
  ));

  return (
    <>
      <section className="relative">
        <img
          src={shape3}
          alt="chirppyShape"
          className="absolute top-[-5%] right-[90%]"
        />
        <img
          src={shape3}
          alt="chirppyShape"
          width={70}
          className="absolute bottom-[5%] right-[-4%]"
        />
        <p className="border-l-4 px-2">Features</p>
        <h2 className="text-3xl md:text-4xl text-amber-400 font-heading my-6 ">
          What is in it for you?
        </h2>

        <div className="flex flex-col gap-6 md:grid grid-cols-5">
          {displayFeatures}
        </div>
      </section>
    </>
  );
};

export default Features;
