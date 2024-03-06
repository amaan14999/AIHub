// src/app/page.js
import React from "react";
import FeaturedSection from "../components/FeaturedSection";
import MainSection from "../components/MainSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="p-4">
        <FeaturedSection />
        <MainSection />
      </div>
    </div>
  );
}
