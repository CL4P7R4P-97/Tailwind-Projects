import React from "react";

const NotesCard = ({ imgUrl, title }) => {
  return (
    <div className=" flex w-1/5 min-w-48 flex-col gap-3 rounded-2xl bg-white p-3 text-center shadow-lg shadow-gray-500 dark:bg-card">
      <div className="flex justify-evenly">
        <img className="rounded-full" width="150px" src={imgUrl} />
      </div>
      <h1 className="text-xl text-black dark:text-white">{title}</h1>
      <h5 className="text-gray-500 ">{"Download notes here"}</h5>
      <div>
        <button className=" btn-dark w-2/3 rounded-2xl p-1 text-white">
          PDF Notes
        </button>
      </div>
      <div>
        <button className=" btn-dark w-2/3 rounded-2xl p-1 text-white">
          Chapterwise Notes
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
