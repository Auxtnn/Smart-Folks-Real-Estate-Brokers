"use client";

import React from "react";
import { FiClock, FiInbox } from "react-icons/fi";
import Link from "next/link";
import type { postsType } from "../types";
import Image from "next/image";

interface BlogPageProps {
  posts: postsType[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const limitedBlog = posts.slice(0, 3);

  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const truncateBody = (body: string, maxLength = 145) => {
    if (!body || body.length <= maxLength) return body;
    return body.slice(0, maxLength).concat("...");
  };

  return (
    <section className="max-w-screen-xl  md:py-10 py-10">
      <div className="mx-auto lg:w-11/12">
        <div className="flex px-5 gap-6 justify-between md:flex-row flex-col mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Explore our Blog and recent Updates
          </h1>
          <div className="md:block hidden">
            <Link
              href="/blog"
              className="w-full items-center hover:bg-primary justify-center px-8 py-3 border border-primary text-[1.125rem] font-medium rounded-md text-primary hover:text-white bg-transparent md:py-2 md:px-10"
            >
              Read More
            </Link>
          </div>
        </div>
        <div
          className={`grid gap-10 mt-4 px-4 ${
            limitedBlog.length > 0
              ? "grid-cols-1 md:grid-cols-3"
              : "flex items-center justify-center h-96"
          }`}
        >
          {limitedBlog.length > 0 ? (
            limitedBlog.map((post: any) => (
              <div
                key={post._id}
                className="rounded overflow-hidden shadow-lg flex flex-col h-full"
              >
                <div className="relative h-48 w-full">
                  <Link href={`/blog/${post.currentSlug}`}>
                    <Image
                      className="w-full h-full object-cover"
                      src={post.image}
                      alt="blog-image"
                      width={300}
                      height={300}
                      priority
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </Link>
                </div>

                <div className="px-4 py-4 flex-grow flex flex-col">
                  <Link
                    href={`/blog/${post.currentSlug}`}
                    className="font-medium text-primary text-lg hover:text-primary transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {post.title}
                  </Link>
                  <div className="text-gray-800 text-sm flex-grow">
                    {post.body && truncateBody(post.body[0].children[0].text)}
                  </div>
                </div>

                <div className="px-4 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <span className="py-1 text-base font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <FiClock className="h-5 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </span>
                  <Link href={`/blog/${post.currentSlug}`}>
                    <span className="py-1 text-base font-regular text-black hover:text-primary mr-1 flex flex-row items-center">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <FiInbox className="text-6xl text-gray-500" />
              <div className="text-gray-800 text-lg">
                No available posts yet
              </div>
            </div>
          )}
        </div>
        <div className="md:hidden mt-4 px-4">
          <Link
            href="/blog"
            className="w-full flex items-center justify-center px-8 py-3 border border-primary text-lg font-medium rounded-md text-primary hover:bg-primary hover:text-white bg-transparent md:py-2 md:px-10"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
