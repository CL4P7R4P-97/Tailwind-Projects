import React from "react";
import { codingBlogs } from "../../data/blogs";
import BlogCard from "../cards/BlogCard";

const Blog = () => {
  return (
    <section className="flex flex-col  bg-purple-50 p-5 dark:bg-body-dark ">
      <h1 className="section-heading  mb-2 p-3  text-black">Coding Articles</h1>
      <div>
        {codingBlogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
              author={blog.author}
              date={blog.date}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
