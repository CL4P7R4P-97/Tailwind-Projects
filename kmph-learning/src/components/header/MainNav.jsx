import { DarkThemeToggle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import code from "../../assets/images/svgs/code.svg";
import SideMenu from "../sideMenu/SideMenu";

const MainNav = () => {
  return (
    <nav className="main-header">
      <div className=" cursor-pointer flex-row justify-start p-3  text-xl">
        <a to="/">
          <img className="w-8   " src={code} alt="code" />

          <span className="text-black dark:text-white">
            <span className="logo-shadow text-purple-600 ">KMPH</span>
            Learning
          </span>
        </a>
      </div>
      <ul className=" main-ul  ">
        <li className=" main-li   ">
          <Link to="/">Home</Link>
        </li>
        <li className="main-li">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="main-li">
          <Link to="/tutorials">Tutorial</Link>
        </li>
        <li className="main-li">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="main-li">
          <Link to="/notes">Notes</Link>
        </li>
        <li className="main-li">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="main-li">
          <Link>My Gear</Link>
        </li>
        <li className="main-li">
          <a>Work With Us</a>
        </li>
      </ul>

      <ul className="space-x-4  p-2 pb-0 pt-1  text-base xxsm:hidden tablet:m-2 tablet:flex tablet:items-center ">
        <div className="xxsm:hidden tablet:my-6 tablet:flex">
          <DarkThemeToggle className="    bg-slate-500 text-white shadow-lg shadow-gray-500 hover:bg-purple-600 hover:shadow-purple-600" />
        </div>
        <button className="main-button">
          <Link to="/login">Login</Link>
        </button>
        <button className="main-button">
          <Link to="/signup">SignUp</Link>
        </button>
      </ul>
      <SideMenu />
    </nav>
  );
};

export default MainNav;
