import React from "react";
import CourseCard from "../cards/CourseCard";

const courses = [
  {
    courseTitle: "Python Tutorials - 100 Days of Code",
    courseDescription:
      "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python",
    imgUrl: "../../src/assets/images/courses/python.jpg",
  },
  {
    courseTitle: "Ultimate JavaScript Course",
    courseDescription:
      "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    imgUrl: "../../src/assets/images/courses/js.jpg",
  },
  {
    courseTitle: "React JS Tutorials For Beginners",
    courseDescription:
      "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
    imgUrl: "../../src/assets/images/courses/react.jpg",
  },
];
const CoursesSection = () => {
  return (
    <section className="section-courses">
      <h1 className=" section-heading">Recommended Courses</h1>
      <div className=" justify-evenly p-10 xxsm:flex-col    xxsm:space-y-3 md:flex   md:flex-row md:space-x-8">
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
