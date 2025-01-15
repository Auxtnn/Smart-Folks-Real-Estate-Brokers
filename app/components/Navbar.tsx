"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { BsChevronBarRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#whychooseus", label: "Why Choose Us" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/listings", label: "Listings" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (e: any) => {
    const href = e.currentTarget.href;
    const path = window.location.pathname;

    // Only handle hash links when you're on the same page (ignores external links)
    if (href.includes("#") && href.split("#")[0] === path) {
      e.preventDefault(); // Prevent the default anchor link behavior

      const id = href.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close sidebar after link click
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-4 pb-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Link href="/">
              <Image
                alt="logo"
                src="/assets/logo1.jpg"
                width={50}
                height={50}
                className="rounded-full"
                unoptimized
              />
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/profile.php?id=100076638170021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-colors duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/smartfolks.realtors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/smart-folks-real-estate-brokers?originalSubdomain=ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-all duration-300 relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white border px-6 py-3 rounded border-primary hover:bg-white hover:text-black transition-all font-normal"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <BiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none float-right"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-primary transition-colors duration-300 group"
              >
                <div className="flex items-center">
                  <span>{item.label}</span>
                  <BsChevronBarRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white mt-6  border px-6 py-3 rounded-full border-primary hover:bg-white hover:text-black transition-all font-normal"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
