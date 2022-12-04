import React from "react";
import { AiOutlineComment } from "react-icons/ai";

export default function Collaboration() {
  return (
    <section className=" mt-20 flex flex-col items-center">
      <h3 className=" text-3xl py-1 dark:text-teal-600 my-2">
        Interested in collaborating with me?
      </h3>
      <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
        I’m always open to discussing product design work or partnership
        opportunities.
      </p>

      <a
        href="mailto:ggopesh45@gmail.com"
        className="text-lg flex my-4 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-3 border-none rounded-full"
      >
        <AiOutlineComment className=" mr-2" /> Start a conversation
      </a>
    </section>
  );
}
