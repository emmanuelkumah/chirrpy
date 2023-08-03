import React from "react";
import heroImg from "../../assets/heroImg.jpg";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 pt-[10%] md:grid-cols-2">
        <section>
          <div>
            <h2 className="text-3xl md:text-4xl leading-normal md:leading-loose font-heading ">
              Expand accessibility, improve productivity, increase accuracy
            </h2>
            <p className="text-xl pt-8 font-secondary">
              Chirrpy is an ai powered speech-to-text service that helps you
              convert audio to text format swiftly.
            </p>
            <div className="grid place-items-center mt-7 md:block">
              <button className="bg-[#E9FFF9] rounded text-xl text-slate-900 w-[80%] md:w-[50%] py-2">
                Try it for free
              </button>
              <div className="flex gap-2 mt-8 text-sm">
                <p>No Sign Up required</p>
                <p>No Credit Card required</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img src={heroImg} alt="Chirrpy Hero" />
        </section>
      </div>
    </>
  );
};

export default Hero;
