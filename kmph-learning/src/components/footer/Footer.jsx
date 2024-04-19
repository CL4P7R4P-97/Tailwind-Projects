import React from "react";
import code from "../../assets/images/svgs/code.svg";
import facebook from "../../assets/images/svgs/fb.svg";
import github from "../../assets/images/svgs/github.svg";
import insta from "../../assets/images/svgs/insta.svg";
import twitter from "../../assets/images/svgs/twitter.svg";
const Footer = () => {
  return (
    <footer className="bg-secondary-bg flex justify-between p-2 text-white">
      <div className="flex space-x-2 p-5 text-white">
        <img className="w-8  " src={code} alt="code" />
        <h1 className="text-xl">KMPHLearning &nbsp;</h1>
        <div className="pt-1">{" | "}</div>
        <div className="text-subHeading pt-1 text-sm">
          &nbsp;Copyright &copy; 2024 KMPHLearning.com
        </div>
      </div>

      <div className="mt-1 flex p-2">
        <ul className="flex">
          <li>
            <a>
              <img className="w-10" src={facebook} alt="facebookIcon" />
            </a>
          </li>
          <li>
            <a>
              <img className="w-10 p-2" src={twitter} alt="twitterIcon" />
            </a>
          </li>
          <li>
            <a>
              <img className="w-10 p-2" src={insta} alt="instaIcon" />
            </a>
          </li>
          <li>
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
