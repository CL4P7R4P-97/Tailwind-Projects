import {
  BookOpenIcon,
  DocumentTextIcon,
  PhoneIcon,
  PlayCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { DarkThemeToggle } from "flowbite-react";
import React from "react";
import code from "../../assets/images/svgs/code.svg";
import SideMenu from "../sideMenu/SideMenu";
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const products = [
  {
    name: "Home",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Courses",

    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Tutorial",

    href: "#",
    icon: VideoCameraIcon,
  },
  {
    name: "Blog",

    href: "#",
    icon: DocumentTextIcon,
  },
  {
    name: "Notes",

    href: "#",
    icon: BookOpenIcon,
  },
];
const Header = () => {
  return (
    <nav class="main-header">
      <div class=" cursor-pointer flex-row justify-start p-3  text-xl">
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

export default Header;
