import { ReactNode } from "react";

export interface ServiceData {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TestimonialCardProps {
  quote: string;
  description: string;
  authorName: string;
}

export interface TestimonialData {
  id: number;
  quote: string;
  description: string;
  authorName: string;
}

export type postsType = {
  currentSlug: any;
  _id: string;
  name: string;
  slug: string;
  mainImage: {
    image: string;
  };
  title: string;
  publishedAt: any;
  body: string;
};

// types/property.ts
export type PropertyImage = {
  id: number;
  url: string;
  alt: string;
};

export type PropertyDetails = {
  id: string;
  title: string;
  description: string;
  price: string;
  propertyType: "Rent" | "Sell" | "Lease";
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  amenities: string[];
  images: PropertyImage[];
  features: {
    category: string;
    items: string[];
  }[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
};
export type propertiesType = {
  currentSlug: string;
  _id: string;
  title: string;
  status: string;
  category: string;
  price: number;
  priceUnit: string;
  mainImage: {
    image: string;
  };
  location: {
    address: string;
    city: string;
  };
};

export type propertyDetailsType = {
  currentSlug: string;
  _id: string;
  title: string;
  status: string;
  category: string;
  price: number;
  priceUnit: string;
  mainImage: {
    image: string;
  };
  images: {
    url: string;
  }[];
  details: {
    bedrooms: number | null;
    bathrooms: number | null;
    toilets: number | null;
    area: number | null;
    furnished: boolean | null;
  };
  description: any[]; // For rich text content, you might want to use a library like @portabletext/react to render this.
  location: {
    address: string;
    city: string;
    coordinates: string;
  };
  features: string[];
};

export interface PropertyLocation {
  category: string;
  city: string;
  address: string;
}

export interface Property {
  currentSlug: string;
  title: string;
  location: PropertyLocation;
  price: number;
  priceUnit: string;
  status: "sale" | "rent" | "lease";
  images: PropertyImage[];
  details: PropertyDetails;
  description: Array<{ children: Array<{ text: string }> }>;
  features: string[];
  image: string;
}
