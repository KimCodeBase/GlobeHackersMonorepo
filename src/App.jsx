import SmCard from "./components/SmCard";
import Navbar from "./components/Navbar";
import LgCard from "./components/LgCard";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import FeaturesSection from "./components/FeaturesSection";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
import "./App.css";
import Footer from "./components/Footer";
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
        //  idea for blogPost state  setBlogPosts(blogPostData.items.fields);
        //then data would match structure coming from form

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
      <Navbar />
      <Header />
      <FeaturesSection />
      <VideoSection />
      <StorySection />
      {blogPosts.map((post, index) => (
        <SmCard
          key={index}
          title={post.fields.title}
          date={post.fields.date}
          author={post.fields.author}
          imageUrl={post.fields.imageUrl}
          article={post.fields.article}
        />
      ))}
      {blogPosts.map((post, index) => (
        <LgCard
          key={index}
          title={post.fields.title}
          date={post.fields.date}
          author={post.fields.author}
          imageUrl={post.fields.imageUrl}
          article={post.fields.article}
          dining={post.fields.dining}
          adventures={post.fields.adventures}
          shopping={post.fields.shopping}
        />
      ))}
      
      <CreatePost/>

      <Footer />
    </>
  );
}
