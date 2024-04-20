import React from "react";
import logo from "../../assets/images/svgs/comma.svg";
const SectionC = () => {
  return (
    <section class="testimonials h-full">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div class="dark:bg-body-dark absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-700 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className=" pb-8 text-center text-3xl text-white dark:text-purple-600">
        Testimonials
      </div>
      <div class="xxsm:flex-col items- mx-auto justify-around  space-x-2  space-y-3 text-center md:flex md:max-w-2xl md:flex-row  lg:max-w-4xl">
        <div className="card p-8 pb-16 text-black dark:text-white">
          <p className="dark:text-testimonial text-black">
            <img className="h-8 pb-2 " src={logo} alt="image" />I don't have
            words to thank this man, I'm really grateful to have this channel
            and website in my daily routine. If you're a mere beginner, then you
            can trust this guy and can put your time into his content. I can
            assure you that it'll be worth it.
          </p>
          <div class="reviewer p-2">
            <p className="mt-2 text-black dark:text-white">Neeraj Kumar</p>
            <h6 className="text-subHeading">Analyst</h6>
          </div>
        </div>
        <div
          style={{ marginTop: 0 }}
          className="card p-8 pb-16 dark:text-white"
        >
          {" "}
          <p className="dark:text-testimonial text-black">
            <img className="h-8 pb-2" src={logo} alt="image" />
            For everyone who wants to level up their #Coding and #Dev skills -
            seriously, this channel is for you! Both basic and advanced stacks
            are covered on this channel, and one can learn according to his
            skill levels. And the icing on the cake is, everything is available
            for free.
          </p>
          <div class="reviewer p-2">
            <p className="mt-2 text-black dark:text-white">Ashish Kumar</p>
            <h6 className="text-subHeading ">Web Developer</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
