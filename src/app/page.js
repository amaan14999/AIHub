// src/app/page.js
import React from "react";
import Sidebar from "../components/Sidebar";
import FeaturedSection from "../components/FeaturedSection";
import MainSection from "../components/MainSection";
import SearchBar from "@/components/SearchBar";
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
