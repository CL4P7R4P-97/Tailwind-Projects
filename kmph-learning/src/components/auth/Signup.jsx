import React, { useEffect, useState } from "react";
import audio from "../../assets/audio/engine.mp3";

const Signup = () => {
  const [values, setValues] = useState(["", "", "", "", ""]);
  const [filledInputs, setFilledInputs] = useState(0);
  const [prevInputCount, setPrevInputCount] = useState(0);

  useEffect(() => {
    const container = document.getElementById("meter");
    const audio = document.getElementById("audio");

    const handleAnimationStart = () => {
      if (prevInputCount === 0 && filledInputs === 1) {
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
          audio.pause();
        }, 3000); // Pause audio after 3 seconds
      }
    };

    container.addEventListener("transitionstart", handleAnimationStart);

    return () => {
      container.removeEventListener("transitionstart", handleAnimationStart);
    };
  }, [filledInputs]);

  const rotateNeedle = () => {
    return {
      transform: `translate(-50%, -100%) rotate(${filledInputs * 45 - 90}deg)`,
    };
  };

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    const filledCount = newValues.filter((val) => val !== "").length;
    setPrevInputCount(filledInputs);
    setFilledInputs(filledCount);
  };
  return (
    <section className="flex h-screen items-center justify-center ">
      <div className="flex h-4/5 flex-col space-y-12 rounded-2xl bg-purple-300  shadow-lg shadow-purple-800 dark:bg-gray-600 dark:shadow-gray-400 xxsm:w-[90%] xxsm:p-8 sm:w-2/5 md:p-16 ">
        <div className="divide-y-3   divide-y divide-slate-200 text-center">
          {" "}
          <h1 className=" text-3xl font-bold text-purple-700/85 dark:text-white">
            Signup
          </h1>{" "}
        </div>

        <form className="flex flex-col  justify-evenly space-y-5  ">
          <div className="flex flex-row  justify-between  px-4">
            <label
              htmlFor="name"
              className="text-purple-700/85 dark:text-white"
            >
              Name
            </label>
            <input
              onChange={(e) => handleChange(0, e.target.value)}
              name="name"
              value={values.name}
              id="name"
              className=" h-8 rounded-lg p-2 xxsm:w-[50%] md:w-2/4"
            />
          </div>
          <div className="flex flex-row  justify-between  px-4">
            <label
              htmlFor="email"
              className="text-purple-700/85 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={(e) => handleChange(1, e.target.value)}
              id="email"
              name="email"
              value={values.email}
              className=" h-8 rounded-lg p-2 xxsm:w-[50%] md:w-2/4 "
            />
          </div>
          <div className="flex flex-row  justify-between  px-4">
            <label
              htmlFor="password"
              className="text-purple-700/85 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={(e) => handleChange(2, e.target.value)}
              id="password"
              type="password"
              value={values.password}
              name="password"
              className="h-8 rounded-lg p-2 xxsm:w-[50%] md:w-2/4 "
            />
          </div>
          <div className="flex flex-row justify-between px-4  ">
            <label
              htmlFor="cPassword"
              className="text-purple-700/85 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) => handleChange(3, e.target.value)}
              id="cPassword"
              value={values.cPassword}
              name="cPassword"
              type="password"
              className="h-8 rounded-lg p-2 xxsm:w-[50%]  md:w-2/4 "
            />
          </div>

          <button className="btn btn-light ">SignUp</button>
        </form>
        <div className="relative">
          <div
            className={`w-30  z-10 ${filledInputs > 0 ? "startEngine" : "bg-inherit"} h-24 rounded-t-full border-8 border-solid  p-4  `}
          ></div>

          <div
            style={rotateNeedle()}
            id="meter"
            className={`z-100   speedometer absolute left-2/4 h-4/5 w-1 -rotate-90 rounded-t-full bg-red-500 `}
          >
            <audio duration="3" id="audio">
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="   absolute left-[34%] top-1/4  h-1/5 w-1 -rotate-45 bg-green-500"></div>
          <div className="  absolute left-[44%] top-2/4 z-0 text-white opacity-60">
            {filledInputs === 4 ? "Ready !" : "KMPHLearning"}
          </div>
          <div className="  absolute right-[34%] top-1/4 h-1/5 w-1 rotate-45 bg-yellow-400"></div>
          <div className="  absolute left-2/4 top-1 h-1/5 w-1 bg-white"></div>

          <div className=" absolute -bottom-1 left-[48.5%] h-4 w-4 rounded-full bg-black "></div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
