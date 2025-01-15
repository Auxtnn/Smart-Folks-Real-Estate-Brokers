"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const EstateBrokerage = () => {
  return (
    <div className="container mx-auto lg:w-11/12 px-4 py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/hello.gif"
            alt="Estate Brokerage"
            width={550}
            height={350}
            className="rounded-lg w-full h-[350px] lg:h-[410px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Your Gateway to Premium Real Estate Solutions:{" "}
            <span className="text-primary">
              Smart Folks Real Estate Brokers
            </span>
          </h2>
          <p className="text-gray-600 leading-7">
            Whether you're buying, selling, renting, or leasing, we provide
            comprehensive services tailored to your unique needs. With our
            extensive market knowledge and dedication, finding your dream home
            or investment property has never been easier.
          </p>
          <p className="text-gray-600 leading-7">
            Let us help you explore a wide range of properties, from stunning
            apartments to expansive commercial spaces, all designed to suit your
            lifestyle and aspirations.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 mt-2">
            <div className="text-center">
              <p className="text-2xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={100} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={50} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                Properties
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-5xl  font-bold text-primary">
                <CountUp start={0} end={10} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateBrokerage;
