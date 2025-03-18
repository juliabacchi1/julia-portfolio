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
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 8,
        title: t("blog.posts.day.title"),
        description: t("blog.posts.day.description"),
        date: "08/03/2025",
        name: "• Julia Bacchi •",
        image: PostDay,
      },
      {
        id: 7,
        title: t("blog.posts.ai.title"),
        description: t("blog.posts.ai.description"),
        date: "14/12/2024",
        name: "• Julia Bacchi •",
        image: PostAi,
      },
      {
        id: 6,
        title: t("blog.posts.purpose.title"),
        description: t("blog.posts.purpose.description"),
        date: "25/11/2024",
        name: "• Julia Bacchi •",
        image: PostPurpose,
      },
      {
        id: 5,
        title: t("blog.posts.impostor.title"),
        description: t("blog.posts.impostor.description"),
        date: "18/11/2024",
        name: "• Julia Bacchi •",
        image: PostImpostor,
      },
      {
        id: 4,
        title: t("blog.posts.bridge.title"),
        description: t("blog.posts.bridge.description"),
        date: "01/11/2024",
        name: "• Julia Bacchi •",
        image: PostBridge,
      },
      {
        id: 3,
        title: t("blog.posts.woman.title"),
        description: t("blog.posts.woman.description"),
        date: "02/10/2024",
        name: "• Julia Bacchi •",
        image: PostWoman,
      },
      {
        id: 2,
        title: t("blog.posts.beginner.title"),
        description: t("blog.posts.beginner.description"),
        date: "30/08/2024",
        name: "• Julia Bacchi •",
        image: PostBegginer,
      },
      {
        id: 1,
        title: t("blog.posts.career.title"),
        description: t("blog.posts.career.description"),
        date: "28/07/2024",
        name: "• Julia Bacchi •",
        image: PostCareer,
      },
    ]);
  }, [t]);

  return (
    <div className="container">
      <h1 className="title">{t("blog.title")}</h1>
      <h2 className="subtitle">{t("blog.subtitle")}</h2>
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
