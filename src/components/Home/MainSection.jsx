import React from "react";
import { MdRecordVoiceOver } from "react-icons/md";

const MainSection = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl text-amber-400 font-heading my-6 ">
          Why Chirrppy
        </h2>
        <div>
          <article className="flex gap-3">
            <h2 className="text-4xl bg-red-800 w-fit h-fit py-3 px-2 rounded-lg ">
              20%
            </h2>
            <p>
              of the world's population has some form of disability that could
              impact their ability to use a keyboard
            </p>
          </article>
          <div>
            <article className="flex gap-3 mt-5">
              <h2 className="text-4xl bg-red-800 w-fit h-fit py-3 px-2 rounded-lg ">
                10%
              </h2>
              <p>
                of this group have significant difficulties using a keyboard.
              </p>
            </article>
          </div>
        </div>

        <small>A 2017 study by the World Wide Web Consortium (W3C)</small>
        <section>
          <h2 className="text-2xl text-amber-400 font-heading mt-6">
            The Solution
          </h2>
          <p>
            Chirrpy empowers users to write large chunk of text using their
            voice
          </p>
        </section>
        <section className="my-6">
          <div>
            <h2 className="text-3xl text-amber-400  font-heading">Use Cases</h2>
            <p>Discover numerous ways you can use Chirrpy</p>
          </div>
          <section className="flex flex-col">
            <div className="my-3 bg-orange-500/[0.2] rounded-lg px-4 py-6 border-t-4">
              <div className="text-4xl text-amber-400">
                <MdRecordVoiceOver />
              </div>
              <h2 className="text-2xl  text-amber-400">
                Increase Accessibility
              </h2>
              <article className="leading-7 font-thin">
                Empower people with disability in using keyboard, easily write
                essays, thesis and document using their voice as a command
              </article>
            </div>
            <div className="my-3 bg-fuchsia-950/[0.2] rounded-lg px-4 py-6 border-t-4 ">
              <div className="text-4xl text-amber-400">
                <MdRecordVoiceOver />
              </div>
              <h2 className="text-2xl text-amber-400">Capture minutes</h2>
              <article className="leading-7 font-thin">
                Spend more time contribute to meeting,and less time taking
                minutes.Record, transcribe and summarize meeting notes
              </article>
            </div>
            <div className="my-3 bg-rose-900/[0.2] rounded-lg px-4 py-6 border-t-4">
              <div className="text-4xl text-amber-400">
                <MdRecordVoiceOver />
              </div>
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
      </section>
    </>
  );
};

export default MainSection;
