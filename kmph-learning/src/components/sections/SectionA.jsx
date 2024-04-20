import React from "react";
import Typewriter from "typewriter-effect";

const SectionA = () => {
  return (
    <section class="welcome-section xxsm:text-center banw:text-left  overflow-hidden ">
      <div class="space-y-3 p-20">
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
          <button class="btn btn-light">Free Courses</button>{" "}
          <button style={{ marginLeft: 0 }} className="btn btn-light">
            Explore Blogs
          </button>
        </div>
      </div>
      <div className=" slanted-container xxsm:hidden banw:flex pr-8  ">
        <img className=" h-full" src="../../src/assets/images/banner.jpg" />
      </div>
    </section>
  );
};

export default SectionA;
