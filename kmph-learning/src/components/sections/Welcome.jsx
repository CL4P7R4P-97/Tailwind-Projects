import React from "react";
import Typewriter from "typewriter-effect";
import bannerImg from "../../src/assets/images/banner.jpg";

const Welcome = () => {
  return (
    <section className="welcome-section overflow-hidden  xxsm:text-center  banw:text-left ">
      <div className="space-y-3 p-20">
        <h1 className="text-3xl">
          Welcome to{" "}
          <span className="glowing-text text-cyan-500  shadow-cyan-500">
            KMPH
          </span>
          Learning
        </h1>
        <h2 className=" text-3xl">
          Learn
          <Typewriter
            options={{
              strings: [
                "Java",
                "React",
                "Web Developement",
                "Python",
                "C++",
                "C",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              pauseFor: 300,
            }}
          />
        </h2>
        <p>
          Confused on which course to take? I have got you covered. Browse
          courses and find out the best course for you. Its free! Code With
          Harry is my attempt to teach basics and those coding techniques to
          people in short time which took me ages to learn.
        </p>
        <div className=" space-x-3 space-y-2">
          <button className="btn btn-light">Free Courses</button>{" "}
          <button
            style={{ marginLeft: 0 }}
            className="btn bg-slate-600 hover:bg-slate-800 "
          >
            Explore Blogs
          </button>
        </div>
      </div>
      <div className=" slanted-container justify-end  pr-8 xxsm:hidden banw:flex  ">
        <img src={bannerImg} />
      </div>
    </section>
  );
};

export default Welcome;
