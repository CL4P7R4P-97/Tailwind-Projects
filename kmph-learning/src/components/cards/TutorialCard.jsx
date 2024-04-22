import React from "react";

const TutorialCard = ({ name, imgUrl }) => {
  return (
    <div className="flex h-1/5 w-1/5 min-w-40 flex-col space-y-2 rounded-lg bg-white p-3 text-center shadow-lg shadow-gray-500  dark:bg-secondary-bg">
      <div className="flex justify-center p-1 text-center ">
        <img src={imgUrl} width="60%" className="rounded-full align-middle" />
      </div>
      <h1 className="text-lg  text-black dark:text-white">{name}</h1>

      <div>
        <button className=" btn-dark w-2/3 rounded-2xl p-1">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default TutorialCard;
