import React from "react";
import heroImg from "../../assets/chirrpyHero2.jpg";
import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 pt-[10%] md:grid-cols-2">
        <section>
          <div>
            <h2 className="text-3xl md:text-5xl text-amber-300 md:leading-normal font-heading ">
              Expand accessibility, improve productivity, increase accuracy
            </h2>
            <p className="text-xl md:text-2xl pt-8 font-secondary">
              Chirrpy is an ai-powered voice recognition service that help users
              write large amount of text using thier voice.🥳
            </p>
            <div className="grid place-items-center mt-7 md:block">
              <Link to="/chirrpy/app">
                <button className="bg-amber-400 hover:bg-amber-500 hover:shadow-lg rounded-full text-xl text-slate-900 w-[80%] md:w-[50%] py-2 md:mt-6">
                  Try it for free
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative">
          <img
            className="-z-30 absolute top-[5%] md:top-[6%] left-2 md:left-[4%] w-[50%] md:w-[20%] h-500px md:h-200px"
            src={shape2}
          />

          <img
            className="rounded-full w-50 h-50 my-4"
            src={heroImg}
            alt="Chirrpy Hero"
          />

          <img
            className="-z-40 absolute bottom-[2%] md:bottom-[-1%] right-7 md:left-[19%] w-[50%] h-500px"
            src={shape1}
          />
        </section>
      </div>
    </>
  );
};

export default Hero;
