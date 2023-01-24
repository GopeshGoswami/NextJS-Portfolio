import React from "react";
import Image from "next/image";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

export default function Skills() {
  return (
    <section>
      <div>
        <h3 className=" text-3xl py-1 dark:text-teal-600">Skills</h3>
        <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
          I've always been a{" "}
          <span className=" text-teal-500">tech enthusiast</span>, I have been
          learning{" "}
          <span className=" text-teal-500">MERN Stack Development</span> as my
          fortie for quite some time along with DSA. I'm quite confident,
          naturally curious, and perpetually working on improving my skills, one
          problem at a time.
        </p>
      </div>
      <div className=" lg:flex gap-10">
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 bg-teal-50 dark:bg-gray-900">
          <Image
            src={design}
            width={100}
            height={100}
            alt=""
            className=" mx-auto"
          />
          <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
            Beautiful Designs
          </h3>
          <p className=" py-2 dark:text-white">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h4 className=" py-4 text-teal-600">Designs Tools I use</h4>
          <p className=" text-gray-800 py-1 dark:text-white">Figma</p>
          <p className=" text-gray-800 py-1 dark:text-white">
            Adobe Illustrator
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">Envato</p>
          <p className=" text-gray-800 py-1 dark:text-white">Font Awesome</p>
          <p className=" text-gray-800 py-1 dark:text-white">Freepik</p>
        </div>

        <div className=" text-center shadow-lg p-10 rounded-xl bg-teal-50 my-10 dark:shadow-sm dark:bg-gray-900">
          <Image
            src={code}
            width={100}
            height={100}
            alt=""
            className=" mx-auto"
          />
          <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
            MERN Stack Developer
          </h3>
          <p className=" py-2 dark:text-white">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4 className=" py-4 text-teal-600">Languages I use: </h4>
          <p className=" text-gray-800 py-1 dark:text-white">
            ReactJS / Next.js
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">
            CSS / TailwindCSS
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">
            Node.js / Express.js
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">MongoDB / MySQL</p>
          <p className=" text-gray-800 py-1 dark:text-white">Firebase</p>
          <p className=" text-gray-800 py-1 dark:text-white">C++</p>
        </div>
      </div>
    </section>
  );
}
