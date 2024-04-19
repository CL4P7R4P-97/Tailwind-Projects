import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import code from "../../assets/images/svgs/code.svg";

const Header = () => {
  return (
    <nav class="bg-secondary-bg flex justify-between  pb-2 pt-2  text-base  text-white">
      <div class="cursor-pointer flex-row justify-start p-3  text-xl">
        <a href="/">
          <img className="w-8  " src={code} alt="code" />

          <span>
            <span class="logo-shadow text-purple-600 ">KMPH</span>
            Learning
          </span>
        </a>
      </div>
      <ul class="  flex items-center  space-x-3 p-4 pr-2 ">
        <li class=" cursor-pointer border-b-2 border-transparent align-middle  transition-all  duration-300 hover:border-b-2 hover:border-purple-600   ">
          <a>Home</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Courses</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Tutorial</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Blog</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Notes</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Contact</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>My Gear</a>
        </li>
        <li class="cursor-pointer   border-b-2 border-transparent hover:border-b-2 hover:border-purple-600 ">
          <a>Work With Us</a>
        </li>
      </ul>
      <div class="m-2 flex cursor-pointer  items-center  pt-2 ">
        <span class=" hover:text-purple-500">
          <FontAwesomeIcon icon={faMoon} style={{ height: "30px" }} />
        </span>
      </div>
      <ul class="m-2 flex  items-center space-x-4 p-2 pb-0 pt-1  text-base ">
        <button className="h-10 rounded-lg bg-purple-500 pl-5 pr-5 text-justify hover:bg-purple-600  hover:shadow-lg   hover:shadow-slate-400/50 focus:outline-none focus:ring focus:ring-purple-300 active:bg-purple-700">
          Login
        </button>
        <button class="h-10 rounded-lg bg-purple-500 pl-5 pr-5 text-justify hover:bg-purple-600  hover:shadow-lg   hover:shadow-slate-400/50 focus:outline-none focus:ring focus:ring-purple-300 active:bg-purple-700">
          SignUp
        </button>
      </ul>
    </nav>
  );
};

export default Header;
