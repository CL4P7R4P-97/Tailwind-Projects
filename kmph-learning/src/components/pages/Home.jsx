import React from "react";
import CoursesSection from "../sections/CoursesSection";
import Testimonials from "../sections/Testimonials";
import Welcome from "../sections/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <CoursesSection />
      <Testimonials />
    </div>
  );
};

export default Home;
