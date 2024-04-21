import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const SecondaryNav = () => {
  return (
    <nav class="secondary-nav  drop-shadow-lg ">
      <div class="my-1 ml-2 cursor-pointer justify-start rounded-lg p-1 shadow-sm  shadow-purple-600 ">
        <button class="home-button  ">
          <Link to="/">
            {" "}
            <FontAwesomeIcon style={{ height: "22px" }} icon={faHouse} />
          </Link>
        </button>
      </div>
      <ul class="justify-center space-x-4 p-3 pl-24 xxsm:hidden sm:flex ">
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
      <div class="relative pr-8 xxsm:hidden md:mb-2 md:flex">
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
