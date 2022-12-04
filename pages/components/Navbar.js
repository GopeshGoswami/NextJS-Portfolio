import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Navbar(props) {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 20) {
      setFix(true);
      console.log(window.scrollY);
    } else setFix(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });
  return (
    // For Sticky, set the classes: sticky, top-0 left-0
    <nav
      className={` transition-all duration-1000 mb-3 flex justify-around sticky w-full top-0 left-0 z-20 backdrop-blur-sm ${
        fix
          ? // #ffffff73
            " ease-in-out py-5 md:py-10 bg-gradient-to-t from-transparent to-teal-500 dark:to-teal-600"
          : " py-8 md:py-8"
      }`}
    >
      <h1
        className={`text-md md:text-xl lg:text-xl font-burtons dark:text-teal-600 ${
          fix ? "dark:text-white" : ""
        }`}
      >
        Welcome
      </h1>
      <ul className=" flex items-center">
        <li>
          {props.darkMode ? (
            <BsFillSunFill
              onClick={() => {
                props.setDarkMode(!props.darkMode);
              }}
              className=" cursor-pointer text-2xl  text-white"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => {
                props.setDarkMode(!props.darkMode);
              }}
              className=" cursor-pointer text-xl"
            />
          )}
        </li>
        <li>
          <a
            href="#"
            className=" text-[0.8rem] md:text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 md:ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
