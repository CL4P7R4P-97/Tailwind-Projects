import React from "react";
import facebook from "../../assets/images/svgs/fb.svg";
import github from "../../assets/images/svgs/github.svg";
import insta from "../../assets/images/svgs/insta.svg";
import twitter from "../../assets/images/svgs/twitter.svg";

const Contact = () => {
  return (
    <section className="bottom-1/5 mx-auto my-20 flex w-4/5  flex-col space-y-8   rounded-2xl bg-blog p-16 ">
      <h1 className="text-center text-3xl font-bold text-white">
        Feel Free to contact me!
      </h1>
      <div className="flex justify-center  ">
        <img
          className="animation-logo rounded-full "
          width="100px"
          src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?t=st=1713842611~exp=1713846211~hmac=85afc6ad7a11d2958023cd6453a4380a17d42b3443961b3a5df7db7a99bb4ed2&w=740"
        />
      </div>
      <div className=" flex  justify-center  p-2">
        <ul className="flex p-2">
          <li className="footer-icon cursor-pointer rounded-full p-1 hover:shadow-yellow-800  hover:ring-yellow-300 ">
            <a>
              <img className="w-8" src={facebook} alt="facebookIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer rounded-full ring-cyan-300  hover:shadow-cyan-800   ">
            <a>
              <img className="w-10 p-2" src={twitter} alt="twitterIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer rounded-full ring-pink-300   hover:shadow-pink-800  ">
            <a>
              <img className="w-10 p-2" src={insta} alt="instaIcon" />
            </a>
          </li>
          <li className="footer-icon cursor-pointer rounded-full  ring-purple-300 ">
            <a>
              <img className="w-10 p-2" src={github} alt="gitHub" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
