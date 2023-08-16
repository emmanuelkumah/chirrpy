import React from "react";
import { BsSpellcheck, BsSave, BsSend, BsFillMicFill } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";

const Features = () => {
  return (
    <>
      <section>
        <p className="border-l-4 px-2">Features</p>
        <h2 className="text-3xl text-amber-400 font-heading my-6 ">
          What is in it for you?
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-4xl grid place-items-center my-4">
              <BsSpellcheck />
            </p>
            <h2 className="text-2xl  text-amber-400 grid place-items-center">
              Grammar checker
            </h2>
            <p className="font-thin">
              Correct grammar, rephrase sentence and summarize
            </p>
          </div>
          <div>
            <p className="text-4xl grid place-items-center  my-4">
              <BsSave />
            </p>
            <h2 className="text-2xl  text-amber-400 grid place-items-center">
              Download Content{" "}
            </h2>
            <p className="font-thin">
              Easily download transcribe text .txt files, .pdf and .docs
            </p>
          </div>
          <div>
            <p className="text-4xl grid place-items-center my-4">
              <BsSend />
            </p>
            <h2 className="text-2xl  text-amber-400 grid place-items-center">
              Auto Send Email
            </h2>
            <p className="font-thin">
              Automatically send transcribe document to your email
            </p>
          </div>
          <div>
            <p className="text-4xl grid place-items-center  my-4">
              <BsFillMicFill />
            </p>
            <h2 className="text-2xl  text-amber-400 grid place-items-center">
              Read aloud
            </h2>
            <p className="font-thin">
              Read out transcribed text again using various voices
            </p>
          </div>
          <div>
            <p className="text-4xl grid place-items-center  my-4">
              <RiUserVoiceLine />
            </p>
            <h2 className="text-2xl  text-amber-400 grid place-items-center">
              Voice Command
            </h2>
            <p className="font-thin">
              Speak to navigate to different part of the website
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
