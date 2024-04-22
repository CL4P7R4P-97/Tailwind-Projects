import React from "react";

const BlogCard = ({ title, author, desc, date }) => {
  return (
    <div className="dark:bg-blog m-2 flex  w-3/5  flex-col space-y-4    text-wrap rounded-xl bg-white p-7  ">
      <h1 className="text-2xl font-extrabold text-black dark:text-white">
        {title}
      </h1>
      <div className="flex  gap-4">
        <h3 className="font-medium text-black dark:text-white">{author}</h3>

        <h3 className="offer">{date}</h3>
      </div>
      <p className="offer  overflow-hidden ">{desc}</p>
      <div>
        <button className=" main-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
