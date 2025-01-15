"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen bg-neutral-50 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />

      <div className="relative lg:w-11/12 mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Section */}
          <motion.div variants={slideIn} className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <motion.div variants={fadeIn} className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-[#b99867]" />
                <span className="text-[#b99867] font-medium tracking-wider uppercase text-sm">
                  Premium Real Estate
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                Discover Luxury <br />
                <span className="text-[#b99867]">Dubai Properties</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-gray-600 text-lg max-w-xl leading-relaxed"
              >
                Experience unparalleled luxury in Dubai's most prestigious
                locations. From waterfront villas to sky-high penthouses, find
                your perfect investment opportunity.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/listing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#b99867] text-white rounded-lg font-medium hover:bg-[#a88756] transition-all shadow-lg shadow-[#b99867]/20"
                >
                  Explore Properties
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-[#b99867] text-[#b99867] rounded-lg font-medium hover:bg-[#b99867] hover:text-white transition-all"
                >
                  Schedule Viewing
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={fadeIn} className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/assets/2.jpg"
                alt="Luxury Dubai Property"
                fill
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 md:-left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#b99867]/10 rounded-full">
                    <svg
                      className="w-6 h-6 text-[#b99867]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Featured Property
                    </div>
                    <div className="font-semibold text-gray-900">
                      MAG Eye Villas
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
