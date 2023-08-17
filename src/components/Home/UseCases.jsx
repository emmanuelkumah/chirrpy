import React from "react";
import { MdRecordVoiceOver } from "react-icons/md";

const UseCases = () => {
  return (
    <>
      <section className="mt-[5%]">
        <div>
          <h2 className="text-3xl md:text-4xl text-amber-400  font-heading">
            Use Cases
          </h2>
          <p className="text-3xl font-thin md:py-7">
            Discover numerous ways you can use Chirrpy 💪🏾
          </p>
        </div>
        <section className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-6">
          <div className="my-3 bg-orange-500/[0.2] shadow-xl rounded-lg px-4 py-6 border-t-4">
            <div className="text-4xl">🖖🏼</div>
            <h2 className="text-2xl  text-amber-400">Increase Accessibility</h2>
            <article className="leading-7 font-thin">
              Chirrpy empowers people with disability in using keyboard to
              easily write essays, thesis and documents using their voice as a
              command
            </article>
          </div>
          <div className="my-3 bg-fuchsia-950/[0.2] shadow-xl rounded-lg px-4 py-6 border-t-4 ">
            <div className="text-4xl ">👩🏻‍💻</div>
            <h2 className="text-2xl text-amber-400">Capture minutes</h2>
            <article className="leading-7 font-thin">
              Spend more time contribute to meeting,and less time taking
              minutes.Record, transcribe and summarize meeting notes
            </article>
          </div>
          <div className="my-3 bg-rose-900/[0.2] shadow-xl rounded-lg px-4 py-6 border-t-4">
            <div className="text-4xl">🖊️</div>
            <h2 className="text-2xl  text-amber-400">
              Write documents swiftly
            </h2>
            <article className="leading-7 font-thin">
              Not a native English speaker but you want to write great email,
              documents etc. Chirrpy converts your speech to text, and has
              in-built editor to format text, check grammer and rephrase text
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default UseCases;
