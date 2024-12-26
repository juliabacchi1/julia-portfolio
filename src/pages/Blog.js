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

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Setting posts:", posts);
    setPosts([
      {
        id: 7,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are not only challenging the norms, but also paving the way for a more inclusive and innovative tech landscape.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostAi,
      },
      {
        id: 6,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are not only challenging the norms, but also paving the way for a more inclusive and innovative tech landscape.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostPurpose,
      },
      {
        id: 5,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are not only challenging the norms, but also paving the way for a more inclusive and innovative tech landscape.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostImpostor,
      },
      {
        id: 4,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are not only challenging the norms, but also paving the way for a more inclusive and innovative tech landscape.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostBridge,
      },
      {
        id: 3,
        title: "Breaking barriers: We women",
        description:
          "Women in programming are not only challenging the norms, but also paving the way for a more inclusive and innovative tech landscape.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostWoman,
      },
      {
        id: 2,
        title: "I wanna be a programmer",
        description:
          "Ready to dive into the world of programming? Unlock the doors to endless possibilities in tech.",
        date: "01/01/2024",
        name: "• Julia Bacchi •",
        image: PostBegginer,
      },
      {
        id: 1,
        title: "This is about change!",
        description:
          "Taking the leap into a new career path, where change leads to growth and opportunity.",
        date: "20/12/2024",
        name: "• Julia Bacchi •",
        image: PostCareer,
      },
    ]);
  }, [posts]);

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
