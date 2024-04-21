import React from "react";
import CoursesSection from "../sections/CoursesSection";
import Testimonials from "../sections/Testimonials";
import Welcome from "../sections/Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <CoursesSection />
      <Testimonials />
    </>
  );
};

export default Home;
