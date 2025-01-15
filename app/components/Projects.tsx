import React from "react";
import { FiClock, FiInbox, FiMapPin, FiHome } from "react-icons/fi";
import Link from "next/link";
import { propertiesType } from "../types";
import Image from "next/image";
// Dummy data for Dubai properties
const dummyProperties = [
  {
    _id: "1",
    title: "Luxury Penthouse with Palm Jumeirah View",
    category: "apartment",
    status: "sale",
    image: "/assets/3.jpg",
    description: [
      {
        children: [
          {
            text: "Spectacular 4-bedroom penthouse offering breathtaking views of Palm Jumeirah and Dubai Marina. Features premium finishes, private pool, and full-floor layout with 360-degree views. Smart home technology and private elevator access.",
          },
        ],
      },
    ],
    location: {
      city: "Dubai Marina",
      address: "Elite Residence Tower, Dubai Marina",
    },
    price: 15000000,
    priceUnit: "total",
    currentSlug: "luxury-penthouse-palm-view",
  },
  {
    _id: "2",
    title: "Modern Villa in Emirates Hills",
    category: "villa",
    status: "sale",
    image: "/assets/4.jpg",
    description: [
      {
        children: [
          {
            text: "Contemporary 6-bedroom villa in Emirates Hills featuring modern architecture, private garden, swimming pool, and entertainment area. Includes staff quarters, smart home systems, and premium imported finishes.",
          },
        ],
      },
    ],
    location: {
      city: "Emirates Hills",
      address: "Sector E, Emirates Hills",
    },
    price: 28000000,
    priceUnit: "total",
    currentSlug: "modern-villa-emirates-hills",
  },
  {
    _id: "3",
    title: "Premium Office Space in DIFC",
    category: "commercial",
    status: "lease",
    image: "/assets/5.jpg",
    description: [
      {
        children: [
          {
            text: "Grade A office space in Dubai International Financial Centre. Floor-to-ceiling windows, modern facilities, dedicated parking, and 24/7 security. Perfect for financial institutions and corporate headquarters.",
          },
        ],
      },
    ],
    location: {
      city: "DIFC",
      address: "Gate District, DIFC",
    },
    price: 1200000,
    priceUnit: "year",
    currentSlug: "premium-office-difc",
  },
];

interface PropertyPageProps {
  properties?: any[]; // Making properties optional since we're using dummy data
}

const Projects: React.FC<PropertyPageProps> = ({
  properties = dummyProperties,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="w-full pb-16 pt-4">
      <div className="lg:w-11/12 mx-auto px-4">
        {properties.length > 0 ? (
          <div>
            {/* Title Section */}
            <div className="md:text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Exclusive Properties
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium properties in
                Dubai's most prestigious locations
              </p>
            </div>

            {/* Property Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Property Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          post.status === "rent"
                            ? "bg-blue-500 text-white"
                            : post.status === "sale"
                              ? "bg-[#b99867] text-white"
                              : "bg-yellow-500 text-white"
                        }`}
                      >
                        {post.status === "sale"
                          ? "For Sale"
                          : post.status === "rent"
                            ? "For Rent"
                            : "For Lease"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <FiHome className="text-[#b99867]" />
                      <span className="text-sm text-gray-600 capitalize">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.description
                        .map((block: any) =>
                          block.children
                            .map((child: any) => child.text)
                            .join("")
                        )
                        .join(" ")}
                    </p>

                    <div className="flex items-start gap-2">
                      <FiMapPin className="text-[#b99867] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {post.location.city}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {post.location.address}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-xl font-bold text-[#b99867]">
                          {formatPrice(post.price)}
                          <span className="text-sm text-gray-500 ml-1">
                            {post.priceUnit === "year"
                              ? "Per Year"
                              : post.priceUnit === "month"
                                ? "Per Month"
                                : ""}
                          </span>
                        </p>
                      </div>

                      <Link href={`/listings/${post.currentSlug}`}>
                        <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-[#b99867] transition-colors duration-300">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
            <FiInbox className="text-6xl text-[#b99867]" />
            <p className="text-xl font-medium text-gray-900">
              No properties available
            </p>
            <p className="text-gray-600">
              Please check back later for new listings
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
