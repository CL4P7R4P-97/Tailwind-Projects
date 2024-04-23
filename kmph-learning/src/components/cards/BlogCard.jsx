import React from "react";

const BlogCard = ({ title, author, desc, date }) => {
  return (
    <div className="dark:bg-blog m-2 flex flex-col  space-y-4  text-wrap rounded-xl    bg-white p-7 xxsm:w-full sm:w-3/5  ">
      <h1 className="text-2xl font-extrabold text-black dark:text-white">
        {title}
      </h1>
      <div className="flex  gap-4">
        <div>
          <img
            width={30}
            className=" rounded-full"
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1713815428~exp=1713819028~hmac=067f5065e47437ece940be616895d2303814d8ca47d4d0c0f779b963dc97d464&w=360"
          />
        </div>
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
