import SmCard from "./components/SmCard";
import Navbar from "./components/Navbar";
import LgCard from "./components/LgCard";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import FeaturesSection from "./components/FeaturesSection";
import StorySection from "./components/StorySection"; // <-- Add this line
import VideoSection from "./components/VideoSection"; // <-- Add this line
import "./App.css";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { getBlogPostData } from "./components/lib/contentfulClient";

export default function App() {
  return (
    <>
      <Navbar />
      <SmCard />
    </>
  );
}
