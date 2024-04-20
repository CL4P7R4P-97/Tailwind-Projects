import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const SecondaryNav = () => {
  return (
    <nav class="secondary-nav drop-shadow-lg ">
      <div class="ml-8 mt-1 cursor-pointer justify-start rounded-lg p-1  shadow-sm ">
        <button class="home-button  ">
          <FontAwesomeIcon style={{ height: "24px" }} icon={faHouse} />
        </button>
      </div>
      <ul class="xxsm:hidden justify-center space-x-4 p-3 pl-24 sm:flex ">
        <li class="secondary-li  ">
          <a>HTML</a>
        </li>
        <li class="secondary-li ">
          <a>Java</a>
        </li>
        <li class="secondary-li ">
          <a>Python</a>
        </li>
        <li class="secondary-li ">
          <a>React</a>
        </li>
        <li class="secondary-li ">
          <a>JS</a>
        </li>
        <li class="secondary-li ">
          <a>C</a>
        </li>
        <li class="secondary-li ">
          <a>C++</a>
        </li>
        <li class="secondary-li ">
          <a>CSS</a>
        </li>
      </ul>
      <div class="xxsm:hidden relative pr-8 md:mb-2 md:flex">
        <label
          htmlFor="searchBox"
          class=" absolute z-50 ml-2 mt-3 rounded-lg border-purple-600"
        >
          <FontAwesomeIcon
            style={{ color: "#9333EA", width: "17px" }}
            icon={faMagnifyingGlass}
          />{" "}
        </label>

        <input id="searchBox" class="search-box" />
      </div>
    </nav>
  );
};

export default SecondaryNav;
