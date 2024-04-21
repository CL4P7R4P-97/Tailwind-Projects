import { DarkThemeToggle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import code from "../../assets/images/svgs/code.svg";
import SideMenu from "../sideMenu/SideMenu";

const MainNav = () => {
  return (
    <nav class="main-header">
      <div class=" cursor-pointer flex-row justify-start p-3  text-xl">
        <a to="/">
          <img className="w-8   " src={code} alt="code" />

          <span className="text-black dark:text-white">
            <span class="logo-shadow text-purple-600 ">KMPH</span>
            Learning
          </span>
        </a>
      </div>
      <ul class=" main-ul  ">
        <li class=" main-li   ">
          <Link to="/">Home</Link>
        </li>
        <li class="main-li">
          <Link to="/courses">Courses</Link>
        </li>
        <li class="main-li">
          <Link to="/tutorials">Tutorial</Link>
        </li>
        <li class="main-li">
          <Link to="/blog">Blog</Link>
        </li>
        <li class="main-li">
          <Link to="/notes">Notes</Link>
        </li>
        <li class="main-li">
          <Link to="/contact">Contact</Link>
        </li>
        <li class="main-li">
          <Link>My Gear</Link>
        </li>
        <li class="main-li">
          <a>Work With Us</a>
        </li>
      </ul>

      <div className="xxsm:hidden tablet:flex tablet:my-6">
        <DarkThemeToggle className="    bg-slate-500 text-white shadow-lg shadow-gray-500 hover:bg-purple-600 hover:shadow-purple-600" />
      </div>
      <ul class="tablet:flex  tablet:items-center tablet:m-2 xxsm:hidden  space-x-4 p-2 pb-0 pt-1 text-base ">
        <button className="main-button">Login</button>
        <button class="main-button">SignUp</button>
      </ul>
      <SideMenu />
    </nav>
  );
};

export default MainNav;
