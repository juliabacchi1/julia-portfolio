import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Post.css";
import PostCareer from "../assets/images/Post-career.png";
import PostBegginer from "../assets/images/Post-begginer.png";
import PostWoman from "../assets/images/Post-woman.png";
import PostBridge from "../assets/images/Post-bridge.png";
import PostImpostor from "../assets/images/Post-impostor.png";
import PostPurpose from "../assets/images/Post-purpose.png";
import PostAi from "../assets/images/Post-ai.png";

const Post = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const fakePosts = [
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
  ];

  useEffect(() => {
    const fetchedPost = fakePosts.find((p) => p.id === parseInt(id));
    setPost(fetchedPost);
  }, [id, fakePosts]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <img src={post.image} alt={post.title} className="post-image" />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div className="post-info">
        <p>{post.name}</p>
        <p>{post.date}</p>
      </div>
      {post.id === 1 && (
        <p>
          Have you ever stood at the edge of something new, your mind clouded
          with a mix of hope and doubt? That's the moment when you realize
          you're about to leap into the unknown: The exciting and scary world of
          a career transition. <br />
          For years, I was stuck in an industry I understood like the back of my
          hand. It was safe and comfortable... But comfort is a double-edged
          sword. While it offers stability, it can stifle dreams you never gave
          yourself permission to pursue. <br />
          One day, the realization hit me: The person I was becoming no longer
          fit the life I wanted for myself. That thought grew with every passing
          day until I couldn't ignore it. I wanted more than a paycheck or a
          routine. I wanted purpose. I wanted to be challenged, to feel alive...
          To create.
          <br />
          So, I jumped.
          <br /> <br />
          <strong>The fear factor</strong>
          <br />
          Let's not romanticize this! Changing careers is messy. There are
          sleepless nights, moments of doubt, and learning curves that feel
          impossible to climb. It's looking at your resume and asking if your
          skills are enough, or if you are enough.
          <br />
          But here's the thing: Fear is not your enemy, it's your compass. If it
          doesn't scare you, it won't change you. Fear means you are on the
          verge of something that matters. Lean into it!
          <br /> <br />
          <strong>The power of beginner's mindset</strong>
          <br />
          Starting over doesn't mean starting from scratch. When I transitioned
          from hospitality to tech, I didn't leave my old skills behind, I
          reinvented them. My ability to solve problems, communicate, and adapt
          became the foundation for learning something entirely new.
          <br /> There's magic in being a beginner (Believe). You get to ask
          questions, challenge assumptions, and see the world through fresh
          eyes. In a way, you're freer than the experts because you're not bound
          by "how things have always been done.""
          <br /> <br />
          <strong>Building your own narrative</strong>
          <br /> People will ask why you changed careers, and their tone will
          sometimes carry a hint of skepticism. But that's your chance to own
          your story. You're not running away from something, you're running
          toward a version of yourself that aligns with your passions, values
          and new goals.
          <br /> I've learned to describe my journey as an evolution, not a
          detour. Every step, whether it seemed logical at the time or not, has
          brought me closer to the person I want to be.
          <br /> <br />
          <strong>The unexpected joys</strong> <br />
          Here's the beautiful part no one tells you about: the small victories.
          The first time you debug a piece of code and it works. The moment a
          mentor sees your work and comments: "Great work! You've got
          potential." The late-night realization that you've learned something
          today you couldn't do yesterday. (Just don't read your codes from
          months ago).
          <br /> It's not just about the destination; it's about who you become
          along the way. <br /> <br />
          <strong>Advice for the leap</strong> <br />
          1. Be patient with yourself: Progress isn't linear. Some days you'll
          feel unstoppable; other days, you'll feel like giving up. Both are
          part of the process. <br />
          2. Find your tribe: Surround yourself with people who believe in you
          and understand the path you're walking. Their encouragement will fuel
          you when your own confidence wavers. <br />
          3. Celebrate every win: No matter how small, every step forward is
          proof that you're capable of growth. <br /> <br />
          <strong>Your turn</strong>
          <br />
          If you're standing on the edge of change, I want you to know this: the
          leap is worth it. The person you're becoming is worth it. Yes, it's
          scary. <br />
          Yes, it's uncertain. But it's also exhilarating, empowering, and the
          most alive you'll ever feel. <br />
          So, take the leap. Let the beauty and chaos of change transform you.
          And when you land, you'll realize you were capable of flying all
          along, no matter your age and where you are in your life.
        </p>
      )}
      {post.id === 2 && (
        <p>
          Diving into the world of programming: Turning confusion into
          confidence
          <br />
          Starting out in programming can feel like stepping into a maze with no
          map. The sheer volume of information, the seemingly endless
          technologies to learn, and the buzzwords thrown around can be
          overwhelming. HTML, CSS, JavaScript, frameworks, libraries, APIs—where
          do you even begin? The frustration of not knowing where to start is
          something almost every beginner faces.
          <br />
          But let me tell you a little secret: it's okay to feel lost. Every
          developer, no matter how experienced, started exactly where you are.
          They, too, stared at their screens, unsure of what to Google, baffled
          by the jargon, and overwhelmed by tutorials that assumed too much.
          <br />
          <br />
          The Struggle of Beginnings
          <br />
          The hardest part of learning programming isn't writing your first line
          of code—it's understanding what you need to learn and in what order.
          Do you start with HTML and CSS? Should you dive straight into
          JavaScript? What about frameworks like React or tools like Git? It's
          like trying to read a book where every page is written in a different
          language.
          <br />
          But here's the good news: you don't need to master everything at once.
          The beauty of programming lies in its incremental nature. You learn
          one thing, then another, and slowly, the pieces of the puzzle start
          fitting together. What once felt impossible begins to make sense.
          <br />
          <br />
          Why I Created "Simplifying Programming - Beginner"
          <br />
          When I first started my programming journey, I found myself
          overwhelmed by scattered resources and unclear roadmaps. I often
          wished for a simple, straightforward guide that could walk me through
          the basics—something that didn't assume I already knew the difference
          between a tag and a class, or how JavaScript fits into the big picture
          of web development.
          <br />
          That's why I created Simplifying Programming - Beginner.
          <br />
          This manual is designed to be a beginner's best friend—a clear,
          step-by-step guide to understanding the core technologies of web
          development: HTML, CSS, and JavaScript. Each section is carefully
          structured to break down complex concepts into digestible pieces,
          supported by practical examples you can try as you learn.
          <br />
          <br />
          What's Inside the Manual?
          <br />
          The material is crafted to:
          <br />
          - Demystify the Basics: Start with foundational knowledge, explained
          in simple terms.
          <br />
          - Focus on Practical Learning: Each section includes real-life
          examples to help you see the "why" behind the "how."
          <br />
          - Build Confidence: By the end, you'll not only understand the
          basics—you'll feel ready to take on your own projects.
          <br />
          <br />
          Learn at Your Own Pace
          <br />
          To make your learning journey even more accessible, the complete
          manual is available for download in English and Portuguese, both as a
          website and PDF. Whether you prefer studying online or offline, you
          can choose the format that works best for you.
          <br />
          - Open the Manual Online: Simplifying Programming - Beginner
          <br />
          - Download Manual in Portuguese (PDF)
          <br />
          - Download Manual in English (PDF)
          <br />
          <br />
          Your Journey Starts Here
          <br />
          Programming is a skill that opens doors to endless possibilities. It's
          not about becoming an expert overnight—it's about taking that first
          step, one line of code at a time.
          <br />
          And now, you don't have to take that step alone. Simplifying
          Programming - Beginner is here to guide you, support you, and show you
          that even the most complicated concepts can be simplified.
          <br />
          So, let's turn confusion into confidence. Your programming journey
          starts now.
        </p>
      )}
      {post.id === 3 && (
        <p>
          Breaking barriers: We women are leading the way in technology, proving
          that innovation knows no gender.
        </p>
      )}
      <button className="back-button" onClick={() => navigate("/Blog")}>
        Back to Blog
      </button>
    </div>
  );
};

export default Post;
