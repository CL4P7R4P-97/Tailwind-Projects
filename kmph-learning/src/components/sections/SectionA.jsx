import React from "react";
import Typewriter from "typewriter-effect";

const SectionA = () => {
  return (
    <section class="bg-body-dark flex h-full w-full justify-between text-white">
      <div class=" flex-col justify-start space-y-3 p-20">
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
            // onInit={(typewriter) => {
            //   typewriter
            //     .typeString("Java")
            //     .pauseFor(1500)
            //     .deleteAll()
            //     .typeString("C++")
            //     .pauseFor(1500)
            //     .deleteAll()
            //     .typeString("Python")
            //     .pauseFor(1500)
            //     .deleteAll()
            //     .typeString("React")
            //     .pauseFor(1500)
            //     .deleteAll()
            //     .typeString("Web Development")
            //     .pauseFor(1500)
            //     .deleteAll()
            //     .start();
            // }}
          />
        </h2>
        <p>
          Confused on which course to take? I have got you covered. Browse
          courses and find out the best course for you. Its free! Code With
          Harry is my attempt to teach basics and those coding techniques to
          people in short time which took me ages to learn.
        </p>
        <div className=" space-x-2">
          <button class="btn btn-light">Free Courses</button>
          <button className="btn btn-light">Explore Blogs</button>
        </div>
      </div>
      <div className=" slanted-container pr-8 ">
        <img className=" h-full" src="../../src/assets/images/banner.jpg" />
      </div>
    </section>
  );
};

export default SectionA;
