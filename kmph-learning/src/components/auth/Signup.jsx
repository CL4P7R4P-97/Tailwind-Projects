import React from "react";

const Signup = () => {
  return (
    <section className="flex h-screen items-center justify-center  ">
      <div className="flex h-4/5 w-2/5 flex-col justify-between gap-y-5 rounded-2xl bg-purple-300 p-8 shadow-lg shadow-purple-800 dark:bg-gray-600 dark:shadow-gray-400 ">
        <div className="divide-y-3  mb-5 divide-y divide-slate-200 text-center">
          {" "}
          <h1 className=" text-3xl font-bold text-purple-700/85 dark:text-white">
            Signup
          </h1>{" "}
        </div>

        <form className="flex flex-col justify-evenly space-y-8  ">
          <div className="flex flex-row justify-between  px-4">
            <label
              htmlFor="#name"
              className="text-purple-700/85 dark:text-white"
            >
              Name
            </label>
            <input className=" h-8 w-2/4 rounded-lg p-2" />
          </div>
          <div className="flex flex-row justify-between  px-4">
            <label
              htmlFor="#email"
              className="text-purple-700/85 dark:text-white"
            >
              Email
            </label>
            <input className=" h-8 w-2/4 rounded-lg  p-2 " />
          </div>
          <div className="flex flex-row justify-between  px-4">
            <label
              htmlFor="#password"
              className="text-purple-700/85 dark:text-white"
            >
              Password
            </label>
            <input type="password" className="h-8 w-2/4 rounded-lg  p-2 " />
          </div>
          <div className="flex flex-row justify-between  px-4">
            <label
              htmlFor="#password"
              className="text-purple-700/85 dark:text-white"
            >
              Confirm Password
            </label>
            <input type="password" className="h-8 w-2/4 rounded-lg  p-2 " />
          </div>

          <button className="btn btn-light ">SignUp</button>
        </form>
        <div className="relative">
          <div className="w-30 btn-light z-10 h-24 rounded-t-full border-8 border-solid  p-4  shadow-inner  "></div>
          <div className=" z-100 absolute bottom-1 left-2/4 h-3/5 w-1 rounded-t-full bg-red-500"></div>
          <div className="  absolute left-1/4 top-1/4  h-1/5 w-1 -rotate-45 bg-green-500"></div>
          <div className="  absolute left-[40%] top-2/4 z-0 text-white opacity-60">
            KMPHLearning
          </div>
          <div className="  absolute right-1/4 top-1/4 h-1/5 w-1 rotate-45 bg-yellow-400"></div>
          <div className="  absolute left-2/4 top-1 h-1/5 w-1 bg-white"></div>

          <div className=" absolute bottom-0 left-[49%] h-4 w-4 rounded-full bg-black "></div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
