import React from "react";

const CourseCard = ({
  courseTitle,
  courseDescription,
  imgUrl,
  width = false,
}) => {
  const classes = width ? "card mt-3 md:w-1/4" : "card mt-3 md:w-1/3  ";
  return (
    <div className={classes}>
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
        <p className="course-desc">{courseDescription}</p>
        <div className="pt-8">
          <button className=" crdBtn btn btn-dark">Start Watching</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
