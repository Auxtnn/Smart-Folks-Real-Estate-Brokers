// app/properties/[slug]/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  PropertyImageCarousel,
  AgentContact,
} from "@/app/components/IndividualListing";
import { FiClock, FiInbox, FiMapPin, FiHome } from "react-icons/fi";

interface PropertyImage {
  id: string;
  url: string;
}

interface Property {
  currentSlug: string;
  title: string;
  location: {
    category: string;
    city: string;
    address: string;
  };
  price: number;
  priceUnit: string;
  status: string;
  images: PropertyImage[];
  details: {
    bedrooms: number;
    bathrooms: number;
    toilets: number;
    area: number;
    furnished: boolean;
  };
  description: Array<{
    children: Array<{
      text: string;
    }>;
  }>;
  features: string[];
  image: string;
}

// Property data function
const getDummyProperty = (slug: string): Property | null => {
  const properties: Record<string, Property> = {
    "luxury-penthouse-palm-view": {
      currentSlug: "luxury-penthouse-palm-view",
      title: "Luxury Penthouse with Palm Jumeirah View",
      location: {
        category: "Residential",
        city: "Dubai Marina",
        address: "Elite Residence Tower, Dubai Marina",
        coordinates: {
          lat: 25.092479,
          lng: 55.14876,
        },
      },
      price: 15000000,
      priceUnit: "total",
      status: "sale",
      images: [
        {
          id: "img1",
          url: "/assets/1.jpg",
        },
        {
          id: "img2",
          url: "/assets/3.jpg",
        },
        {
          id: "img3",
          url: "/assets/5.jpg",
        },
      ],
      details: {
        bedrooms: 4,
        bathrooms: 5,
        toilets: 6,
        area: 6500,
        furnished: true,
      },
      description: [
        {
          children: [
            {
              text: "Experience the pinnacle of luxury living in this spectacular full-floor penthouse with breathtaking views of Palm Jumeirah and Dubai Marina...",
            },
          ],
        },
      ],
      features: [
        "Private Pool,Full Sea View,Private Elevator,Smart Home System,Maid's Room,Private Garage,24/7 Security,Concierge Service,Private Gym,Home Theater",
      ],
      image: "/assets/1.jpg",
    },
  };

  return properties[slug] || null;
};

export default function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const property = getDummyProperty(resolvedParams.slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <FiInbox className="text-6xl text-[#b99867] mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">
            Property Not Found
          </h2>
          <p className="text-gray-600">
            The property you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-20 mt-10 pb-10">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <FiHome className="text-[#b99867]" />
              {property.location.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <FiMapPin className="text-[#b99867]" />
              {property.location.city}
            </span>
            <span>•</span>
            <span className="text-[#b99867] font-semibold">
              {formatPrice(property.price)}
              <span className="text-sm text-gray-500 ml-1">
                {property.priceUnit === "total"
                  ? ""
                  : `Per ${property.priceUnit}`}
              </span>
            </span>

            <div
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                property.status === "sale"
                  ? "bg-[#b99867] text-white"
                  : property.status === "rent"
                    ? "bg-blue-500 text-white"
                    : "bg-yellow-500 text-white"
              }`}
            >
              {property.status === "sale"
                ? "For Sale"
                : property.status === "rent"
                  ? "For Rent"
                  : "For Lease"}
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <PropertyImageCarousel images={property.images} />

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white rounded-xl shadow-sm">
              {Object.entries({
                Bedrooms: property.details?.bedrooms,
                Bathrooms: property.details?.bathrooms,
                "Plot Area": `${property.details?.area} Sqm`,
                Status: property.details?.furnished
                  ? "Furnished"
                  : "Unfurnished",
              }).map(([label, value]) => (
                <div key={label} className="text-center">
                  <p className="text-gray-500 text-sm mb-1">{label}</p>
                  <p className="text-xl font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description
                  .map((block) =>
                    block.children.map((child) => child.text).join("")
                  )
                  .join(" ")}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {property.features[0]
                  .split(",")
                  .map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg"
                    >
                      <span className="text-[#b99867]">•</span>
                      <span className="text-gray-700">{feature.trim()}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <AgentContact />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
