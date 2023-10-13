import React, { useState, useEffect } from "react";
import HeaderVideo from "../components/HeaderVideo";
import StorySection from "../components/StorySection";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import SmCard from "../components/SmCard";
import { getBlogPostData } from "../components/lib/contentfulClient";

export default function Home() {
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
    <div>
      <Header />
      {blogPosts.map((post, index) => (
        <SmCard
          key={index}
          title={post.fields.title}
          date={post.fields.date}
          author={post.fields.author}
          article={post.fields.article}
          imageUrl={post.fields.imageUrl}
        />
      ))}
      <HeaderVideo />
      <FeaturesSection />
      <StorySection />
    </div>
  );
}
