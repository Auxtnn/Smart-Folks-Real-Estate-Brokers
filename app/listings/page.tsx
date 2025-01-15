import React from "react";

import Alllistings from "../components/AllListings";

export default async function Listing() {
  return (
    <main>
      <div className="md:pt-20 pt-10">
        <Alllistings />
      </div>
    </main>
  );
}
