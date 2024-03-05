// src/app/page.js (Adjust the path as per your project structure)
import React from "react";
import { AIModelProvider } from "../context/AIModelContext"; // Adjust the import path
import Sidebar from "../components/Sidebar";
import FeaturedSection from "../components/FeaturedSection";
import MainSection from "../components/MainSection";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="">
        <SearchBar />
        <FeaturedSection />
        <MainSection />
      </div>
    </div>
  );
}
