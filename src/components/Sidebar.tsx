import Image from "next/image";
import React from "react";
import ImgSelf from "./selfImg.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
const Sidebar = () => {
  return (
    <>
      <Image
        src={ImgSelf}
        alt="Self img"
        height={200}
        width={200}
        className="w-32 h-32 mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Harshank</span> Kanungo
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500">
        Frontend Developer
      </p>
      {/* Resume */}
      {/* <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a> */}

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.youtube.com">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/harshank-kanungo-a4b178251/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/harshankgit">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Ahmedabad,India </span>
        </div>
        <div className="flex items-center justify-center">
          <FaEnvelope className="mr-2" /> <span> code.sumax@gmail.com </span>
        </div>
        <div className="flex items-center justify-center">
          <FaPhoneAlt className="mr-2" /> <span> 8514961665 / 8640960375 </span>
        </div>
      </div>

      {/* Email Button */}

      <div className="email">
        {" "}
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() => window.open("mailto:harshankkanungo259@gmail.com")}
        >
          Email me
        </button>
        {/* <button
          onClick={() => {}}
          className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
        >
     
          Change Theme
        </button> */}
      </div>
    </>
  );
};

export default Sidebar;
