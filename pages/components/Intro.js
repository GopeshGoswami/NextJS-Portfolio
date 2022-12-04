import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";

export default function Intro() {
  return (
    <section className="min-h-screen">
      <div className=" text-center p-2">
        <h2 className=" text-4xl text-teal-600 font-medium md:text-6xl">
          Gopesh Goswami
        </h2>
        <h3 className=" text-lg py-2 md:text-3xl dark:text-white">
          Designer & Front-End Developer
        </h3>
        <p className=" text-md py-5 leading-8 text-gray-800 max-w-xs md:text-xl mx-auto dark:text-gray-400">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
        <a
          href="https://twitter.com/goppppu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.linkedin.com/in/gopeshgoswami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/artistic.daddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full z-1 w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={deved} alt="" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
