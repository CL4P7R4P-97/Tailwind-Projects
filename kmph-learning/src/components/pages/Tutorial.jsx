import React from "react";
import { tutorials } from "../../data/tutorials";
import TutorialCard from "../cards/TutorialCard";

const Tutorial = (props) => {
  return (
    <div className="   mb-5 flex-col p-4 text-black">
      <div>
        <h1
          className="section-heading my-4 
    pt-4 text-center text-2xl"
        >
          Tutorial
        </h1>
        <div
          style={{ alignItems: "baseline" }}
          className="flex-wrap justify-evenly gap-6 align-middle xxsm:flex  md:flex-row   "
        >
          {tutorials.map((tut, index) => {
            return (
              <TutorialCard name={tut.name} id={index} imgUrl={tut.imgUrl} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
