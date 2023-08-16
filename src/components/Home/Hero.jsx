import React from "react";
import heroImg from "../../assets/chirrpyHero2.jpg";
import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 pt-[10%] md:grid-cols-2">
        <section>
          <div>
            <h2 className="text-3xl text-amber-300 md:text-4xl leading-normal md:leading-loose font-heading ">
              Expand accessibility, improve productivity, increase accuracy
            </h2>
            <p className="text-xl pt-8 font-secondary">
              Chirrpy is an ai-powered voice recognition service that help
              people with mobility impairment write chunk of text using thier
              voice
            </p>
            <div className="grid place-items-center mt-7 md:block">
              <button className="bg-amber-400 rounded-full text-xl text-slate-900 w-[80%] md:w-[50%] py-2">
                Try it for free
              </button>
            </div>
          </div>
        </section>
        <section>
          <img
            className="-z-30 absolute bottom-[-15%] left-2 w-[50%] h-500px"
            src={shape2}
          />

          <div className="">
            <img
              className="rounded-full w-50 h-50 my-4"
              src={heroImg}
              alt="Chirrpy Hero"
            />
          </div>
          <div className="">
            <img
              className="-z-40 absolute bottom-[2%] right-7 w-[50%] h-500px"
              src={shape1}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
