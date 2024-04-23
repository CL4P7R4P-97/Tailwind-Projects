import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

const persons = [
  {
    name: "Neeraj Kumar",
    personJob: "Analyst",
    description:
      "I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.",
  },
  {
    name: "Ashish Kumar",
    personJob: "Web Developer",
    description:
      "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials h-full">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-700 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:bg-body-dark sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className=" pb-8 text-center text-3xl text-white">Testimonials</div>
      <div className="items- mx-auto justify-around space-x-2  space-y-3  text-center xxsm:flex-col md:flex md:max-w-2xl md:flex-row  lg:max-w-4xl">
        {persons.map((person, index) => {
          return (
            <TestimonialCard
              key={index}
              description={person.description}
              person={person.name}
              personJob={person.personJob}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
