import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className=" p-3 md:text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-screen flex items-center justify-center">
      <div className="">
        <p className=" text-sm flex items-center justify-center">
          Technologies Used to create this portfolio: NextJS{" "}
          {<TbBrandNextjs className=" hidden md:flex md:text-3xl mx-2" />},
          TailwindCSS{" "}
          {<SiTailwindcss className=" hidden md:flex md:text-3xl mx-2" />}
        </p>
      </div>
    </div>
  );
}
