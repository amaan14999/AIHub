import React from "react";
import Navbar from "./Navbar";
import FeaturedSection from "./FeaturedSection";
import MainSection from "./MainSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <FeaturedSection />
        <MainSection />
      </div>
    </div>
  );
}
