import React from "react";

import EstateBrokerage from "./components/EstateBrokerage";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import RegisteringMethods from "./components/RegisteringMethods";
import Features from "./components/Services";
import WhatWeDoSection from "./components/WhyChooseUs";
import { TestimonialSection } from "./components/Testimonial";
import BlogPage from "./components/BlogHome";
import { getPosts } from "@/sanity/lib/query";

export default async function Home() {
  const posts = (await getPosts("post")) || [];

  return (
    <main>
      <div className="">
        <HeroSection />
        <RegisteringMethods />
        <EstateBrokerage />
        <Features />
        <WhatWeDoSection />
        {/* <AdvantagesSection /> */}
        <TestimonialSection />
        {/* <PropertyListing /> */}

        <Projects />

        <BlogPage posts={posts} />

        {/* <NewsletterSection /> */}

        {/* <Advertisement /> */}

        {/* Developers Details */}
        {/* <PostFooterDevMode /> */}
      </div>
    </main>
  );
}
