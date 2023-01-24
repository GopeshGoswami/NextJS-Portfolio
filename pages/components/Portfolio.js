import React from "react";
import Image from "next/image";
import {
  movieApi,
  pokeApi,
  mernTodo,
  youtubeClone,
} from "../../public/Portfolio/index";
// import movieApi from "../../public/Portfolio/Movie-Api.png";

export default function Portfolio() {
  return (
    <section>
      <div>
        <h3 className=" text-3xl py-1 dark:text-teal-600">Portfolio</h3>
      </div>
      <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/* Here  */}
        <div className=" relative basis-1/3 flex-1">
          <Image
            src={movieApi}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt=""
            layout="responsive"
          />
          <div className=" absolute top-0 left-0 w-full h-full rounded-lg hover:cursor-pointer bg-[#00000051] backdrop-blur-sm flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://api-1-613ibtnwb-gopeshgoswami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-teal-300 p-2  text-2xl"
            >
              Movie Api
            </a>
            <p className=" text-white text-md mt-3 w-2/3">
              Used ReactJS, Axios and TailwindCSS to create a Movie-Api to fetch
              the details of all the related movies that are searched for.
            </p>
          </div>
        </div>
        {/* To here */}
        {/* Here  */}
        <div className=" relative basis-1/3 flex-1">
          <Image
            src={pokeApi}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt=""
            layout="responsive"
          />
          <div className=" absolute top-0 left-0 w-full h-full rounded-lg hover:cursor-pointer bg-[#00000051] backdrop-blur-sm flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://github.com/GopeshGoswami/api-1.git"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-teal-300 p-2  text-2xl"
            >
              Pokemon Api
            </a>
            <p className=" text-white text-md mt-3 w-2/3">
              Used Poke-Api to fetch the details of all the Pokemons that are in
              the API.
            </p>
          </div>
        </div>
        {/* To here */}
        {/* Here  */}
        <div className=" relative basis-1/3 flex-1">
          <Image
            src={mernTodo}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt=""
            layout="responsive"
          />
          <div className=" absolute top-0 left-0 w-full h-full rounded-lg hover:cursor-pointer bg-[#00000051] backdrop-blur-sm flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://mern-todo-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-teal-300 p-2  text-2xl"
            >
              MERN Stack Todo App
            </a>
            <p className=" text-white text-md mt-3 w-2/3">
              A full stack responsive todo list, with CRUD (Create, Read, Upload
              and Delete) functionalities.
            </p>
          </div>
        </div>
        {/* To here */}
        {/* Here  */}
        <div className=" relative basis-1/3 flex-1">
          <Image
            src={youtubeClone}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt=""
            layout="responsive"
          />
          <div className=" absolute top-0 left-0 w-full h-full rounded-lg hover:cursor-pointer bg-[#00000051] backdrop-blur-sm flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://youtube-clone-three-zeta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-teal-300 p-2  text-2xl"
            >
              Youtube-Clone
            </a>
            <p className=" text-white text-md mt-3 w-2/3">
              A fully responsive youtube-clone, where you can search for any
              youtube video or channel and play the video right on this site,
              using a public API. (Currently working on making it MERN stack,
              adding login ability, along with comments and various other
              stuff!)
            </p>
          </div>
        </div>
        {/* To here */}
      </div>
    </section>
  );
}
