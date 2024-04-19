import React from "react";

const SectionB = () => {
  return (
    <section class="bg-body-dark flex-column h-full w-full justify-around pt-8 text-center text-white">
      <h1 className=" text-3xl font-bold text-purple-600">
        Recommended Courses
      </h1>
      <div class=" flex  space-x-8 p-10">
        <div className="  card  ">
          <div className="h-1/3 overflow-hidden">
            <img
              className="  rounded-t-lg"
              src="../../src/assets/images/courses/python.jpg"
            />
          </div>
          <div className="cardBody">
            <h4 className="text-subHeading">FREE COURSE</h4>
            <h1 className="py-1 text-xl">
              Python Tutorials - 100 Days of Code
            </h1>
            <p className=" text-slate-400">
              Python is one of the most demanded programming languages in the
              job market. Surprisingly, it is equally easy to learn and master
              Python. Let's commit our 100 days of code to python!
            </p>
            <div className="pt-8">
              <button className=" crdBtn btn btn-dark">Start Watching</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="h-1/3 overflow-hidden">
            <img
              className="  rounded-t-lg"
              src="../../src/assets/images/courses/js.jpg"
            />
          </div>
          <div className="cardBody">
            <h4 className="text-subHeading">FREE COURSE</h4>
            <h1 className="py-1 text-xl">Ultimate JavaScript Course</h1>
            <p className="text-slate-400">
              This latest JavaScript course comes with premium curriculum that
              covers everything from basics to advance. On top of that, you will
              get my handwritten notes of JS for completely free. What are you
              waiting for? Just Enroll Buddy
            </p>
            <div className="pt-3">
              <button className=" crdBtn btn btn-dark">Start Watching</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="h-1/3 overflow-hidden">
            <img
              className=" w-full rounded-t-lg"
              src="../../src/assets/images/courses/react.jpg"
            />
          </div>
          <div className="cardBody">
            <h4 className="text-subHeading">FREE COURSE</h4>
            <h1 className="py-1 text-xl">React JS Tutorials For Beginners</h1>
            <p className="text-slate-400">
              React is a free and open-source front-end JavaScript library. This
              series will cover React from starting to the end. We will learn
              react from the ground up!
            </p>
            <div className="pt-1">
              <button className=" crdBtn btn btn-dark">Start Watching</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
