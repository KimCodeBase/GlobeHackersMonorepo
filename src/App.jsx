import SmCard from './components/SmCard';
import Navbar from './components/Navbar';
import './App.css'
import { useState, useEffect } from 'react';
import { getBlogPostData } from './components/lib/contentfulClient';



export default function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPostData = await getBlogPostData();
        setBlogPosts(blogPostData.items);
        setLoading(false);
      } catch(error) {
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
    {blogPosts.map((post, index) => (
        <SmCard
          key={index}
          title={post.fields.title}
          date={post.fields.date}
          author={post.fields.author}
          photo={post.fields.photo.fields.file.url}
          article={post.fields.article}
        />
      ))}
    </>
  );
  }
 
