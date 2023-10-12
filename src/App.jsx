import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Destinations from "./Pages/Destinations";
import Footer from "./components/Footer";
import Header from './components/Header'


import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() { 
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <VideoSection />
      <FeaturesSection />
      <StorySection />
      <Footer />
    </Router>
  );
}