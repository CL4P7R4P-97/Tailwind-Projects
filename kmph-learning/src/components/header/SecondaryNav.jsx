import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const SecondaryNav = () => {
  return (
    <nav className="secondary-nav  drop-shadow-lg ">
      <div className="my-1 ml-2 cursor-pointer justify-start rounded-lg p-1 shadow-sm  shadow-purple-600 ">
        <button className="home-button  ">
          <Link to="/">
            {" "}
            <FontAwesomeIcon style={{ height: "22px" }} icon={faHouse} />
          </Link>
        </button>
      </div>
      <ul className="justify-center space-x-4 p-3 pl-24 xxsm:hidden sm:flex ">
        <li className="secondary-li  ">
          <Link to="/tutorial/html">HTML</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/java">Java</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/python">Python</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/react">React</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/js">JS</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/c">C</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/c++">C++</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/css">CSS</Link>
        </li>
        <li className="secondary-li ">
          <Link to="/tutorial/PHP">PHP</Link>
        </li>
      </ul>
      <div className="relative pr-8 xxsm:hidden md:mb-2 md:flex">
        <label
          htmlFor="searchBox"
          className=" absolute z-50 ml-2 mt-4 rounded-lg border-purple-600"
        >
          <FontAwesomeIcon
            style={{ color: "#9333EA", width: "17px" }}
            icon={faMagnifyingGlass}
          />{" "}
        </label>

        <input id="searchBox" className="search-box" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default SecondaryNav;
