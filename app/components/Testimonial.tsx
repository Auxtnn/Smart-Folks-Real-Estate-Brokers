"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { TestimonialData } from "../types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    quote: "The perfect place in Midtown Dubai.",
    description:
      "I recently purchased an apartment in Midtown Dubai, and Imran assisted me with the process. He helped me secure a mortgage and guided me through the documentation, which can often be complicated.",
    authorName: "Farman Kaziakhmedov",
  },

  {
    id: 2,
    quote: "A fantastic experience working together",
    description:
      "Working with Imran was a fantastic experience. His professionalism, expertise, and dedication to the clients make him stand out in the real estate industry. I would highly recommend Imran to anyone looking to buy, sell and rent a property. His exceptional service and commitment to excellence ensure that you are in good hands throughout the entire process.",
    authorName: "Anwar Sadath",
  },
  {
    id: 3,
    quote: "Great customer service.",
    description:
      "I have been dealing with Mr. Imran last 6 years now and has been constantly supportive from day one till date. If there is any matter related to the property, he extends an helping hand, great sense of responsibility and he make sure all goes smoothly. He has also shown a very reliable and customer oriented approach every time we had to renew our contract.",
    authorName: "Sajeesh Pilat",
  },
  {
    id: 4,
    quote: "The experience with Smart Folks team.",
    description:
      "The experience with Smart Folks team and specially with Mr. Imran has been exceptional. He brings with him vast market experience and knowledge. He helps you in identifying the market and tailors the offerings as per your needs. He guided us with the right market entry point, location and time. I would recommend the team to anyone, the level of support.",
    authorName: "Umair Ul Haq",
  },
];

const TestimonialCard = ({ description, authorName }) => {
  return (
    <div className="h-[350px] flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex-1 p-8">
        <span className="inline-block text-primary/80 mb-6">
          <FaQuoteLeft className="w-8 h-8" />
        </span>
        <div className="space-y-1">
          <p className="text-gray-600 leading-relaxed line-clamp-6">
            {description}
          </p>
        </div>
      </div>
      <div className="p-8 pt-0">
        <div className="pt-6 border-t border-gray-100">
          <p className="font-semibold text-primary">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section
      className="py-10 px-4 bg-gradient-to-b from-slate-50 to-white"
      id="testimonials"
    >
      <div className=" lg:w-11/12 mx-auto">
        <div className="md:text-center mb-12">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our clients trust and recommend our services
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          className="[&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-slate-300 
                     [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:w-6 
                     [&_.swiper-button-next]:text-primary [&_.swiper-button-next]:bg-white [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-md
                     [&_.swiper-button-prev]:text-primary [&_.swiper-button-prev]:bg-white [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-md
                     [&_.swiper-button-next::after]:text-lg [&_.swiper-button-prev::after]:text-lg !pb-16"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <TestimonialCard
                quote={testimonial.quote}
                description={testimonial.description}
                authorName={testimonial.authorName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
