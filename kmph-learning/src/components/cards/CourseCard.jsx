import React from "react";

const CourseCard = ({ courseTitle, courseDescription, imgUrl }) => {
  return (
    <div className="card mt-3 flex flex-col justify-between xxsm:w-[300px]">
      <div className="relative h-1/3 overflow-hidden ">
        <img
          width="100%"
          height="100%"
          className="  rounded-t-lg object-cover"
          src={imgUrl}
        />
      </div>
      <div className="cardBody">
        <h4 className="offer">FREE COURSE</h4>
        <h1 className="course-name">{courseTitle}</h1>
        <p className="course-desc ">{courseDescription}</p>
      </div>
      <div class="px-6 pb-2 pt-4">
        <span class="my-2 mr-2 inline-block cursor-pointer rounded-full bg-purple-700 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-600">
          {" "}
          Start Watching{" "}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
