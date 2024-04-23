import React from "react";
import logo from "../../assets/images/svgs/comma.svg";
const TestimonialCard = ({ description, person, personJob }) => {
  return (
    <div className="card mt-3 p-8 pb-16 text-black dark:text-white">
      <p className="text-black dark:text-testimonial">
        <img className="h-8 pb-2 " src={logo} alt="image" />
        {description}
      </p>
      <div className="reviewer p-2">
        <p className="mt-2 text-black dark:text-white">{person}</p>
        <h6 className="text-subHeading">{personJob}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
