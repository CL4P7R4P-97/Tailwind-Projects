import React from "react";
import { courses, premiumCourses } from "../../data/courses";
import CourseCard from "../cards/CourseCard";

const Courses = () => {
  return (
    <div className="mb-5 flex   flex-col p-4 text-black xxsm:items-center">
      <div>
        <h1
          className="section-heading my-4 
        pt-4 text-center text-2xl"
        >
          Premium Courses
        </h1>
        <div className=" justify-evenly gap-10 space-y-4 xxsm:flex-col md:flex md:flex-row md:flex-wrap md:space-x-4   ">
          {premiumCourses.map((course, index) => {
            return (
              <CourseCard
                width={true}
                key={index}
                courseTitle={course.courseTitle}
                courseDescription={course.courseDescription}
                imgUrl={course.imgUrl}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h1
          className="section-heading  mt-10
          py-4 text-center text-2xl"
        >
          More Courses
        </h1>
        <div className="justify-evenly gap-10 xxsm:flex-col md:flex md:flex-row md:flex-wrap md:space-x-4 tablet:flex-wrap ">
          {courses.map((course, index) => {
            return (
              <CourseCard
                courseTitle={course.courseTitle}
                width={true}
                key={index + "x"}
                courseDescription={course.courseDescription}
                imgUrl={course.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
