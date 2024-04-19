import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const SecondaryNav = () => {
  return (
    <nav class="bg-secondary-bg  flex justify-between  text-sm font-normal text-white">
      <div class="ml-8 mt-1 cursor-pointer justify-start rounded-lg p-1  shadow-sm ">
        <span class=" shadow-sm hover:text-purple-500 ">
          <FontAwesomeIcon style={{ height: "24px" }} icon={faHouse} />
        </span>
      </div>
      <ul class="flex justify-center space-x-4 p-3 pl-24 ">
        <li class="cursor-pointer border-b-2  border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600  ">
          <a>HTML</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>Java</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>Python</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>React</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>JS</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>C</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>C++</a>
        </li>
        <li class="cursor-pointer border-b-2 border-transparent text-purple-300 hover:border-b-2 hover:border-purple-600 ">
          <a>CSS</a>
        </li>
      </ul>
      <div class="relative pr-8">
        <label
          for="searchBox"
          class=" absolute z-50 ml-2 mt-3 rounded-lg border-purple-600"
        >
          <FontAwesomeIcon
            style={{ color: "#9333EA", width: "17px" }}
            icon={faMagnifyingGlass}
          />{" "}
        </label>

        <input
          id="searchBox"
          class="w-30 mt-2 rounded-lg p-1 pl-10  text-sm text-purple-300 hover:shadow-lg focus:bg-slate-50 focus:shadow-slate-400/50"
        />
      </div>
    </nav>
  );
};

export default SecondaryNav;
