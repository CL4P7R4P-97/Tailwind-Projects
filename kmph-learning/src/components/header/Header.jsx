import { DarkThemeToggle } from "flowbite-react";
import React, { useState } from "react";
import code from "../../assets/images/svgs/code.svg";

const Header = () => {
  const [isDeviceSmall, setForSmall] = useState(false);
  return (
    <nav class="main-header">
      <div class="cursor-pointer flex-row justify-start p-3  text-xl">
        <a href="/">
          <img className="w-8   " src={code} alt="code" />

          <span className="text-black dark:text-white">
            <span class="logo-shadow text-purple-600 ">KMPH</span>
            Learning
          </span>
        </a>
      </div>
      <ul class=" main-ul  ">
        <li class=" main-li  ">
          <a>Home</a>
        </li>
        <li class="main-li">
          <a class>Courses</a>
        </li>
        <li class="main-li">
          <a>Tutorial</a>
        </li>
        <li class="main-li">
          <a>Blog</a>
        </li>
        <li class="main-li">
          <a>Notes</a>
        </li>
        <li class="main-li">
          <a>Contact</a>
        </li>
        <li class="main-li">
          <a>My Gear</a>
        </li>
        <li class="main-li">
          <a>Work With Us</a>
        </li>
      </ul>

      <div>
        <DarkThemeToggle className="tablet:mt-6  bg-slate-500 text-white shadow-lg shadow-gray-500 hover:bg-purple-600 hover:shadow-purple-600" />
      </div>
      <ul class="tablet:flex tablet:items-center  tablet:m-2 flex-row space-x-4 p-2 pb-0 pt-1  text-base ">
        <button className="main-button">Login</button>
        <button class="main-button">SignUp</button>
      </ul>
    </nav>
  );
};

export default Header;
