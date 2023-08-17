import React from "react";
import shape3 from "../../assets/shape3.png";

const WhyChirrpy = () => {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 md:mt-[7%]">
        <section className="relative my-6">
          <h2 className="text-3xl text-amber-400 font-heading  ">
            Why Chirrppy
          </h2>
          <p className="text-2xl pt-3 md:text-5xl font-thin">
            We are changing how you write. Even if you cannot type 🧑‍💻
          </p>
          <img
            src={shape3}
            alt="shape"
            width={60}
            className="absolute top-[2%] left-[-3%]"
          />
        </section>
        <section className="md:mt-[10%]">
          <article className="flex flex-col gap-3 md:flex-row">
            <h2 className="text-4xl bg-red-800 w-fit h-fit py-3 px-2 rounded-lg ">
              20%
            </h2>
            <p className="font-thin pb-9 md:text-xl">
              of the world's population has some form of disability that could
              impact their ability to use a keyboard 😟.
            </p>
          </article>
          <article className="flex flex-col gap-3 md:flex-row">
            <h2 className="text-4xl bg-red-800 w-fit h-fit py-3 px-2 rounded-lg ">
              10%
            </h2>
            <p className="font-thin md:text-xl">
              of this group have significant difficulties using a keyboard 😞.
            </p>
          </article>
          <small className="text-amber-400">
            A 2017 study by the World Wide Web Consortium (W3C)
          </small>
        </section>
      </div>
    </>
  );
};

export default WhyChirrpy;
