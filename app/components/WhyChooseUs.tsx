import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "../types";
import {
  FaHandsHelping,
  FaGavel,
  FaPeopleCarry,
  FaHeartbeat,
} from "react-icons/fa";
import {
  FaHome,
  FaShieldAlt,
  FaCrown,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaCalendarCheck,
} from "react-icons/fa";

const services: ServiceData[] = [
  {
    icon: <FaHome className=" text-primary text-4xl" />,
    title: "Modern Homes",
    description:
      "Discover a range of contemporary homes designed to provide comfort and style, located in serene neighborhoods.",
  },

  {
    icon: <FaCrown className=" text-4xl text-primary" />,
    title: "Luxury Living",
    description:
      "Experience premium living with top-notch amenities, beautiful interiors, and exclusive community features.",
  },
  {
    icon: <FaMoneyBillWave className=" text-4xl  text-primary" />,
    title: "Competitive Pricing",
    description:
      "Get the best value for your investment with properties priced competitively in prime locations.",
  },
  {
    icon: <FaMapMarkedAlt className=" text-primary text-4xl" />,
    title: "Prime Locations",
    description:
      "Strategically located properties close to essential services, schools, and business hubs for convenience.",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full pt-10 bg-gray-100"
      id="whychooseus"
    >
      <div className=" px-4 mx-auto md:w-11/12  w-full">
        <div className="flex flex-col lg:flex-row md:gap-8 w-full">
          <div className="lg:w-2/4 w-full">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Why Choose US
              </h2>
              <p className="text-gray-600 text-lg lg:text-base leading-relaxed mb-4">
                At Smart Folks Real Estate Brokers, we prioritize your comfort,
                security, and satisfaction. Our properties are strategically
                located, competitively priced, and designed with modern
                amenities to fit your lifestyle.
              </p>
              <div className="flex flex-col space-y-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 w-full">
            <img
              loading="lazy"
              src="/assets/10.png"
              alt="Real estate"
              className="rounded-lg w-full object-contain aspect-[0.73]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
