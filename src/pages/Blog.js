import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";
import PostCareer from "../assets/images/Post-career.png";
import PostBegginer from "../assets/images/Post-begginer.png";
import PostWoman from "../assets/images/Post-woman.png";
import PostBridge from "../assets/images/Post-bridge.png";
import PostImpostor from "../assets/images/Post-impostor.png";
import PostPurpose from "../assets/images/Post-purpose.png";
import PostAi from "../assets/images/Post-ai.png";
import PostDay from "../assets/images/Post-day.png";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 8,
        title: "Hey girl, I got you",
        description:
          "Honoring the incredible impact of women in tech and beyond on International Women's Day.",
        date: "08/03/2025",
        name: "• Julia Bacchi •",
        image: PostDay,
      },
      {
        id: 7,
        title: "And about AI?",
        description:
          "Exploring the transformative impact of artificial intelligence in 2024 and beyond.",
        date: "14/12/2024",
        name: "• Julia Bacchi •",
        image: PostAi,
      },
      {
        id: 6,
        title: "The power of purpose",
        description:
          "What turns dreams into action? Discover how finding your WHY can transform your journey.",
        date: "25/11/2024",
        name: "• Julia Bacchi •",
        image: PostPurpose,
      },
      {
        id: 5,
        title: "Embracing your inner coder",
        description:
          "Overcome imposter syndrome and own your coding journey with confidence and resilience.",
        date: "18/11/2024",
        name: "• Julia Bacchi •",
        image: PostImpostor,
      },
      {
        id: 4,
        title: "Building bridges with APIs",
        description:
          "The backbone of modern development, enabling seamless connections and empowering code.",
        date: "01/11/2024",
        name: "• Julia Bacchi •",
        image: PostBridge,
      },
      {
        id: 3,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are breaking norms and shaping a more inclusive, innovative tech future.",
        date: "02/10/2024",
        name: "• Julia Bacchi •",
        image: PostWoman,
      },
      {
        id: 2,
        title: "I wanna be a programmer",
        description:
          "Ready to dive into the world of programming? Unlock the doors to endless possibilities in tech.",
        date: "30/08/2024",
        name: "• Julia Bacchi •",
        image: PostBegginer,
      },
      {
        id: 1,
        title: "This is about change!",
        description:
          "Taking the leap into a new career path, where change leads to growth and opportunity.",
        date: "28/07/2024",
        name: "• Julia Bacchi •",
        image: PostCareer,
      },
    ]);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Blogging my Code journey</h1>
      <h2 className="subtitle">One line of code at a time - By Julia Bacchi</h2>
      <div className="post-list">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={{
              pathname: `/blog/${post.id}`,
            }}
            className="post-card"
          >
            <img src={post.image} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <div className="post-content">
              <p className="post-name">{post.name}</p>
              <p className="post-date">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
