import LgCard from "../components/LgCard";
import SmCard from "../components/SmCard";
import { useState, useEffect } from "react";
import { getBlogPostData } from "../components/lib/contentfulClient";

export default function Destinations() {
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
    </div>
  );
}
