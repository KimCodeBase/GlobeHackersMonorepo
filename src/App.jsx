import SmCard from "./components/SmCard";
import Navbar from "./components/Navbar";
import LgCard from "./components/LgCard";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import FeaturesSection from "./components/FeaturesSection";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostData } from "./components/lib/contentfulClient";

export default function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPostData = await getBlogPostData();
        setBlogPosts(blogPostData.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Header />
        <CreatePost />
        {blogPosts.map((post, index) => (
          <LgCard
            key={index}
            title={post.fields.title}
            date={post.fields.date}
            author={post.fields.author}
            article={post.fields.article}
            listTitle={post.fields.listTitle}
            recommendations={post.fields.recommendations}
          />
        ))}
        {blogPosts.map((post, index) => (
          <SmCard
            key={index}
            title={post.fields.title}
            date={post.fields.date}
            author={post.fields.author}
            article={post.fields.article}
          />
        ))}
        <VideoSection />

        <FeaturesSection />
        <StorySection />
        <Footer />
      </Router>
    </>
  );
}
