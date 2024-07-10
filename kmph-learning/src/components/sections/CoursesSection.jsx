import React from "react";
import CourseCard from "../cards/CourseCard";

const courses = [
  {
    courseTitle: "Python Tutorials - 100 Days of Code",
    courseDescription:
      "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python",
    imgUrl: "../../assets/images/courses/python.jpg",
  },
  {
    courseTitle: "Ultimate JavaScript Course",
    courseDescription:
      "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes. Jump In now!",
    imgUrl: "../../assets/images/courses/js.jpg",
  },
  {
    courseTitle: "React JS Tutorials For Beginners",
    courseDescription:
      "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!. All materials provided ",
    imgUrl: "../../assets/images/courses/react.jpg",
  },
];
const CoursesSection = () => {
  return (
    <section className="section-courses">
      <h1 className=" section-heading">Recommended Courses</h1>
      <div className=" items-center p-10 xxsm:flex xxsm:flex-col xxsm:justify-center xxsm:space-y-3    card:flex card:flex-row card:items-stretch   card:justify-evenly card:space-x-8">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              courseTitle={course.courseTitle}
              courseDescription={course.courseDescription}
              imgUrl={course.imgUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CoursesSection;
