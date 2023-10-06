import SmCard from './components/SmCard';
import Navbar from './components/Navbar';
import './App.css'
import { useState, useEffect } from 'react';
import { getBlogPostData } from './components/lib/contentfulClient';



export default function App() {
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    getBlogPostData();
    
    const fetchData = async() => {
      try {
        const getBlogPostData = await fetch('https://cdn.contentful.com/spaces/vg79p7oq5l6k/environments/master/entries?access_token=yDB-E814LS6R2KZiL3NwEUIJ9muWipQqpYd50abWBlk&content_type=blogPost&select=fields.title,fields.date,fields.author,fields.article');
        if (!getBlogPostData.ok) {
        throw new Error(
          'the request failed with a status of' + getBlogPostData.status
        );}
        const parsedBlogPost = await getBlogPostData.json();
        console.log(parsedBlogPost);
        const blogPosts = parsedBlogPost.items || [];
        setBlogPost(blogPosts);
      } catch(error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    {blogPost.map((post, index) => (
      <SmCard
        key={index}
        title={post.fields.title}
        date={post.fields.date}
        author={post.fields.author}
        
        article={post.fields.article}
      />
    ))}
    </>
  );
  }
 
