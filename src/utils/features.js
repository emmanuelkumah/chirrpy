import { BsSpellcheck, BsSave, BsSend, BsFillMicFill } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";

const features = [
  {
    id: 1,
    caption: "Grammar Checker",
    details: "Correct grammar, rephrase sentence and summarize",
    //icon: <BsSpellcheck />,
  },
  {
    id: 2,
    caption: `Download Content`,
    details: `Easily download the transcribe voice into .txt files, .pdf and .docs`,
    //icon: <BsSave />,
  },
  {
    id: 3,
    caption: `Auto Send `,
    details: ` Automatically send the transcribed document to your email`,
    //icon: <BsSend />,
  },
  {
    id: 4,
    caption: `Read Aloud`,
    details: `Read out transcribed text again using various voices`,
    // icon: <BsFillMicFill />,
  },
  {
    id: 5,
    caption: `Voice Command`,
    details: `Speak to navigate to different part of the website`,
    // icon: <RiUserVoiceLine />,
  },
];

export default features;
