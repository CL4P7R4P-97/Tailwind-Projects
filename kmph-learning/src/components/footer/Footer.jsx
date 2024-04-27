import React from "react";
import { useSelector } from "react-redux";
import code from "../../assets/images/svgs/code.svg";
import facebook from "../../assets/images/svgs/fb.svg";
import github from "../../assets/images/svgs/github.svg";
import insta from "../../assets/images/svgs/insta.svg";
import twitter from "../../assets/images/svgs/twitter.svg";
import { getPanelState } from "../../redux/slice/tutorialsSlice";
const Footer = () => {
  const isPanelOpen = useSelector(getPanelState);
  console.log(isPanelOpen);
  return (
    <footer
      className={` ${isPanelOpen ? "justify-center" : "justify-evenly"} bg-purple-100   p-2 text-white dark:bg-secondary-bg xxsm:flex-col md:flex md:flex-row `}
    >
      <div className="footer:flex xxsm:flex-cols items-center  space-x-2 pb-1 pt-3 text-center text-black dark:text-white">
        <div className="mx-auto my-0  max-w-max ">
          <img className="m-1 w-8  " src={code} alt="code" />
        </div>
        <div>
          <h1 className=" text-xl">KMPHLearning &nbsp;</h1>
        </div>
        <div className="pt-1">{" | "}</div>
        <div className="pt-1 text-sm text-subHeading">
          &nbsp;Copyright &copy; 2024 KMPHLearning.com
        </div>
      </div>

      <div className=" flex  justify-center  p-2">
        <ul className="flex p-2">
          <li className="footer-icon cursor-pointer rounded-full  p-1 ">
            <a>
              <img className="w-8" src={facebook} alt="facebookIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer  rounded-full   ">
            <a>
              <img className="w-10 p-2" src={twitter} alt="twitterIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer rounded-full  shadow-purple-400  ">
            <a>
              <img className="w-10 p-2" src={insta} alt="instaIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer rounded-full  shadow-purple-400 ">
            <a>
              <img className="w-10 p-2" src={github} alt="gitHub" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
