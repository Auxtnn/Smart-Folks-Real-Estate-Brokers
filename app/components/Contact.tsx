"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name must contain only letters")
    .min(3, "First name must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
    .min(3, "Last name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[1-10]\d{1,14}$/, "Invalid phone number")
    .min(11, "Phone number must be at least 11 characters")
    .max(14, "Invalid phone number"),
  message: yup.string().required("Message is required"),
  agree: yup.bool().oneOf([true], "Accept the privacy policy to proceed"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Start loading
    const endpoint = `/contact-us`;

    try {
      const { agree, ...filteredData } = data;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData), // Send the modified data object
      });

      const responseBody = await response.json(); // Get response body

      if (!response.ok) {
        console.error("Server Response:", responseBody); // Log server response
        toast.error(
          responseBody.message || "There was a problem with the form submission"
        );
        return; // Exit the function to avoid double toasting
      }

      // Reset form after successful submission
      reset();

      toast.success("Form submitted successfully");
    } catch (error) {
      toast.error("There was a problem with the form submission");
    } finally {
      setIsLoading(false); // Stop loading, whether success or error
    }
  };

  return (
    <div className="md:py-20 pb-10 pt-20 mt-14 md:mt-0 px-4 bg-white">
      <div className="flex flex-col md:flex-row md:gap-8 items-center md:justify-between md:w-11/12 mx-auto w-full">
        <div className="flex flex-col gap-[32px] w-full md:w-1/2">
          <div className="flex flex-col gap-[4px] md:gap-[20px] pb-[16px]">
            <h5 className="font-semibold text-[24px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[0.02] text-black100">
              Get in touch
            </h5>
            <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-subText">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[24px]"
          >
            <div className="flex flex-col md:flex-row items-center gap-[32px]">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="text-sm font-semibold">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  className="border p-2 rounded-md"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="text-sm font-semibold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="border p-2 rounded-md"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="you@company.com"
                {...register("email")}
                className="border p-2 rounded-md"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="phoneNumber" className="text-sm font-semibold">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="+971 (555) 000-0000"
                {...register("phoneNumber")}
                className="border p-2 rounded-md"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a message"
                {...register("message")}
                className="border p-2 rounded-md"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="flex flex-col items-start gap-[12px]">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-md font-semibold"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 w-full hidden md:block">
          <img
            loading="lazy"
            src="/assets/11.png"
            alt="Real estate"
            className="rounded-lg w-full object-contain aspect-[0.73]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
