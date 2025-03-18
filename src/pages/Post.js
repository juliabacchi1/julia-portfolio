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
import PostDay from "../assets/images/Post-day.png";
import Descomplicando from "../assets/images/Descomplicando-manual.pdf";
import Simplifying from "../assets/images/Simplifying-manual.pdf";
import { useTranslation } from "react-i18next";

const Post = () => {
  const { t } = useTranslation();

  const { id } = useParams(); // Captura o ID da URL
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fakePosts = [
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
    ];

    const foundPost = fakePosts.find((p) => p.id === Number(id));
    if (!foundPost) {
      navigate("/404"); // Redireciona para página de erro se o post não for encontrado
    } else {
      setPost(foundPost);
    }
  }, [id, navigate, t]);

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
          Getting started in programming can be like entering a maze without
          map. The sheer volume of information, the seemingly endless
          technologies to learn, and the buzzwords used can be very heavy. HTML,
          CSS, JavaScript, frameworks, libraries, APIs — where do you even
          start? The frustration of not knowing where to start is something
          almost every beginner faces.
          <br />
          But let me tell you: It's okay to feel lost. Every developer, no
          matter how experienced, started exactly where you are. They, too,
          stared at their screens, unsure of what to Google, perplexed by what
          jargon and weighed down by tutorials that assumed too much.
          <br />
          <br />
          <strong>The struggle of beginnings</strong>
          <br />
          The hardest part of learning programming isn't writing your first line
          of code, is understanding what you need to learn and in what order. Do
          you start with HTML and CSS? Should you dive straight into JavaScript?
          What about frameworks like React or tools like Git? It's like trying
          to read a book where every page is written in a different language.
          <br />
          But here's the good news: you don't need to master everything at once.
          The beauty of programming lies in its incremental nature. You learn
          one thing, then another, and slowly, the pieces of the puzzle start
          fitting together. What once felt impossible begins to make sense.
          <br />
          <br />
          <strong>Why I created "Simplifying Programming - Beginner"</strong>
          <br />
          When I first started my programming journey, I found myself
          overwhelmed by scattered resources and unclear roadmaps. I've often
          wished for a simple, straightforward guide that could walk me through
          the basics - something that didn't assume I already knew the
          difference between a tag and a class, or how JavaScript fits into the
          big picture of web development.
          <br />
          That's why I created Simplifying Programming - Beginner.
          <br />
          This manual is designed to be a beginner's best friend: A clear,
          step-by-step guide to understanding the core technologies of web
          development: HTML, CSS, and JavaScript. Each section is carefully
          structured to break down complex concepts into digestible pieces,
          supported by practical examples you can try as you learn.
          <br />
          <br />
          <strong>What's inside the manual?</strong>
          <br />
          The material is crafted to:
          <br />
          - Demystify the basics: Start with foundational knowledge, explained
          in simple terms.
          <br />
          - Focus on practical learning: Each section includes real-life
          examples to help you see the "why" behind the "how."
          <br />
          - Build confidence: By the end, you'll not only understand the basics
          - you'll feel ready to take on your own projects.
          <br />
          <br />
          <strong>Learn at your own pace</strong>
          <br />
          To make your learning journey even more accessible, the complete
          manual is available for download in English and Portuguese, both as a
          website and PDF. Whether you prefer studying online or offline, you
          can choose the format that works best for you.
          <br />
          <br />-{" "}
          <a
            href="https://simplifying-2qpqfs7.gamma.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the Manual Online: Simplifying Programming - Beginner
          </a>
          <br />-{" "}
          <a href={Descomplicando} target="_blank" rel="noopener noreferrer">
            Download Manual in Portuguese (PDF)
          </a>
          <br />-{" "}
          <a href={Simplifying} target="_blank" rel="noopener noreferrer">
            Download Manual in English (PDF)
          </a>
          <br />
          <br />
          <strong>Your journey starts here</strong>
          <br />
          Programming is a skill that opens doors to endless possibilities. It's
          not about becoming an expert overnight: It's about taking that first
          step, one line of code at a time.
          <br />
          And now, you don't have to take that step alone. Simplifying
          Programming - Beginner is here to guide you, support you, and show you
          that even the most complicated concepts can be simplified.
          <br />
          <br />
          So, let's turn confusion into confidence. Your programming journey
          starts now.
        </p>
      )}
      {post.id === 3 && (
        <p>
          Women in programming are not only challenging the norms but also
          paving the way for a more inclusive and innovative tech landscape.
          Despite representing only 0.07% of the tech workforce in Brazil, the
          future for women in technology is brighter than ever. Globally, the
          McKinsey Global Institute projects that by 2030, greater gender
          diversity in the tech sector could increase global productivity by up
          to $12 trillion. This potential for economic growth underscores the
          critical importance of bringing more women into technology.
          <br />
          <br /> In fact, companies that embrace diversity in leadership -
          especially gender and ethnicity - are 33% more likely to outperform
          their peers in profitability, according to McKinsey & Company's
          Diversity Wins report. This proves that inclusion is not just the
          right thing to do; it's also a smart business move. Women are not just
          filling a quota: They are driving innovation and changing the future
          of the tech industry.
          <br />
          <br />
          As a woman in the tech world, I've seen firsthand how diverse teams
          bring fresh ideas and perspectives to the table. The problems we
          solve, the tools we build, and the way we approach challenges are all
          influenced by the backgrounds we come from. It's not just about
          "fitting in", but about pushing boundaries and creating something new
          together.
          <br />
          <br />
          The demand for technology professionals is skyrocketing, and the U.S.
          Bureau of Labor Statistics projects a 13% growth in computer science
          jobs by 2030, much faster than the average for other industries. As
          more women enter this field, they are poised to shape the future of
          emerging technologies, including Artificial Intelligence (AI). The
          World Economic Forum reports that women's participation in AI has
          grown 2.5% from 2015 to 2020, with further growth expected as more
          women take the leap into this game-changing field.
          <br />
          <br /> Women in tech are leading the charge for a more diverse,
          innovative, and prosperous future. As more women embrace the
          challenges and opportunities of the tech world, the potential to
          transform industries and economies grows exponentially.
        </p>
      )}
      {post.id === 4 && (
        <p>
          APIs are the unsung heroes of modern development. They are the
          invisible bridges connecting applications, enabling them to
          communicate and work together in ways that make our digital world
          function seamlessly.
          <br />
          In the ever-evolving world of technology, APIs (Application
          Programming Interfaces) are the quiet force that powers many of the
          tools and services we use every day. While it may seem like a complex
          topic, APIs are simply a way for different software systems to talk to
          each other and share data. Whether you're logging into a website using
          your Google account, checking the weather on your phone, or making a
          payment online, it's likely that an API is at work behind the scenes.
          <br />
          <br />
          For beginners in programming, understanding APIs is a game-changer.
          They open the door to endless possibilities, allowing you to integrate
          various services, tools, and data sources into your own projects.
          Learning how to use APIs means you can harness the power of platforms
          like Google Maps, Twitter, and Stripe without having to build
          everything from scratch.
          <br />
          But what makes APIs so incredible isn't just their functionality—it's
          their potential to transform how we create. By leveraging APIs, we can
          build faster, more efficient applications and focus on the unique
          features that make our projects stand out. It's about working smarter,
          not harder.
          <br />
          <br />
          As a beginner, you might feel overwhelmed by the technical jargon
          surrounding APIs, but the truth is, once you break them down and
          understand their role, they become one of the most exciting parts of
          coding. APIs empower you to take your projects to the next level,
          connect them with other services, and even create something entirely
          new. The possibilities are limitless, and with the right mindset, you
          can start using APIs in your own work today.
          <br />
          <br />
          <strong>Tips for Working with APIs:</strong>
          <br />
          <br />
          1. Start with free APIs: There are many free and easy-to-use APIs that
          are perfect for beginners.
          <br />
          Some popular ones include:
          <br />- <strong>OpenWeatherMap:</strong> Get weather data for any
          location around the world.
          <br />- <strong>The Dog API:</strong> Fetch images and data about
          different dog breeds (perfect for fun projects).
          <br />- <strong>News API:</strong> Pull in the latest news articles
          from a wide range of sources to add to your applications.
          <br />- <strong>JokeAPI:</strong> Add some humor to your app by
          integrating jokes into your projects.
          <br />
          <br />
          2. Read the documentation carefully: Each API comes with documentation
          that explains how to use it. Spend time getting familiar with the
          setup, endpoints, and parameters. Most APIs offer tutorials or sample
          code to help you get started.
          <br />
          <br />
          3. Use Postman for testing: Postman is a fantastic tool for testing
          APIs without writing a single line of code. It lets you make requests
          and see the responses, which will help you understand how to interact
          with an API before implementing it in your own project.
          <br />
          <br />
          4. Keep API keys secure: Many APIs require an API key, which is
          essentially a password that gives you access to the service. Always
          keep your API keys safe and avoid hardcoding them directly in your
          app's code. Use environment variables to keep them secure.
          <br />
          <br />
          5. Be mindful of rate limits: Some APIs limit the number of requests
          you can make in a given period. This is especially important when
          you're testing or building prototypes. Keep track of these limits to
          avoid hitting them and disrupting your workflow.
          <br />
          <br />
          <strong>Conclusion:</strong>
          <br />
          <br />
          So, whether you're building a simple weather app or developing
          something more complex, learning how to use APIs is one of the best
          ways to expand your programming toolkit. Start small, experiment, and
          soon you'll realize that APIs aren't just a tool—they're the gateway
          to creating more dynamic, interactive, and powerful applications.
        </p>
      )}
      {post.id === 5 && (
        <p>
          Feeling like you're not "good enough"? You're not alone. Imposter
          syndrome: The belief that you're a fraud or undeserving of your
          accomplishments affects countless programmers, from beginners to
          seasoned professionals. The good news? It's not a reflection of your
          abilities but a sign of growth and ambition.
          <br />
          Imposter syndrome often shows up when you're learning something new or
          stepping outside your comfort zone. It's that little voice whispering,
          "You don't belong here." But the truth is, everyone starts somewhere,
          and the best developers were once beginners too.
          <br />
          <br />
          Here are some ways to tackle imposter syndrome and reclaim your
          confidence:
          <br />
          <br />
          1. <strong>Focus on progress, not perfection:</strong> Celebrate small
          wins, like solving a tricky bug or completing a project. Every step
          forward is proof that you're growing.
          <br />
          2. <strong>Remember you're not alone:</strong> Even tech giants like
          Elon Musk or Sundar Pichai have expressed feelings of self-doubt.
          Imposter syndrome is common, and it doesn't define your worth.
          <br />
          3. <strong>Seek Support:</strong> Join communities, connect with
          peers, and share your journey. Sometimes, just hearing “me too” from
          others can make a world of difference.
          <br />
          4. <strong>Learn from Failure:</strong> Mistakes are not setbacks;
          they're opportunities to learn. Each misstep brings you closer to
          mastering your craft.
          <br />
          5. <strong>Acknowledge Your Wins:</strong> Take time to reflect on how
          far you've come. That project you thought was impossible last year?
          You've done it now. That's real progress.
          <br />
          <br />
          Coding is as much about persistence as it is about skill. The journey
          isn't always easy, but every challenge you face is shaping you into a
          stronger, more capable developer. Embrace the learning process, and
          remember: you're not an imposter: You are a coder.
        </p>
      )}
      {post.id === 6 && (
        <p>
          Purpose is the invisible thread that weaves meaning into our lives.
          It's the spark that keeps us going when the path is uncertain, the
          light that guides us through challenges, and the voice that whispers,
          "Keep going, because this matters."
          <br />
          <br />
          In a world full of noise and endless possibilities, purpose is our
          anchor. It's not about having all the answers or following a perfect
          plan. It's about knowing why you're on this journey. Purpose
          transforms work into passion, struggles into lessons, and dreams into
          reality.
          <br />
          For some, purpose is clear, a cause, a goal, or a calling that pulls
          them forward. For others, it's discovered along the way, a mosaic
          built piece by piece through experiences, mistakes, and reflection.
          And that's okay.
          <br />
          <br />
          <strong>"Purpose isn't a destination, it's a process!"</strong>
          <br />
          <br />
          When you align with your purpose, everything changes. Work feels
          lighter because it's no longer just about tasks, but it's about
          impact. Success becomes more meaningful because it's tied to something
          bigger than yourself. And even failures feel less daunting because
          they're stepping stones on a purposeful path.
          <br />
          Purpose grows with you. It evolves as you learn, explore, and push
          your boundaries. The key is to listen to your passions, to what
          excites you, and to what breaks your heart. Often, purpose lies at the
          intersection of what you love, what the world needs, and what you're
          uniquely capable of doing.
          <br />
          <br />
          So, whether you're coding a new app, solving a complex problem, or
          simply taking the first steps toward a dream, remember: every action
          infused with purpose has the power to change lives, including your
          own.
          <br />
          Your journey doesn't have to be perfect. It just has to be purposeful.
          Find your why, and let it lead you to places you've never imagined.
        </p>
      )}
      {post.id === 7 && (
        <p>
          Artificial intelligence (AI) continues to revolutionize industries,
          shaping a future that once seemed out of reach. In 2024, we've
          witnessed remarkable advancements, cementing AI's role as a
          cornerstone of modern society.
          <br />
          <br />
          One standout achievement this year was AI's role in early cancer
          detection. By enabling faster and more accurate diagnoses, AI has the
          potential to save countless lives. In astronomy, AI contributed to the
          groundbreaking discovery of liquid water on Mars, paving the way for
          new explorations and insights into the cosmos.
          <br />
          However, with rapid adoption comes challenges. Studies show that AI is
          set to impact nearly 60 million jobs across the U.S. and Mexico within
          a year, highlighting the urgent need for workforce reskilling and
          adaptability to evolving demands.
          <br />
          AI has also left a mark on content creation, with Brazil seeing a 30%
          surge in the digital content market, transforming the way we consume
          and create information.
          <br />
          <br />
          Academically, AI took center stage, with two Nobel Prizes awarded for
          groundbreaking AI related research, underscoring its multifaceted
          influence on society.
          <br />
          These advancements emphasize the importance of a balanced approach to
          AI, leveraging its benefits while addressing the ethical and societal
          challenges it brings. As we move forward, it's vital to foster ongoing
          discussions about AI's role, ensuring that its development contributes
          to a more equitable and prosperous future.
          <br />
          Artificial intelligence isn't just a tool, but a transformative force
          reshaping the boundaries of possibility. By embracing its potential
          and tackling its challenges, we can build a tomorrow where technology
          and humanity walk hand in hand toward progress.
          <br />
          <br />
          <strong> Sources of Inspiration:</strong>
          <br />
          - Early cancer detection: transforming diagnostics.
          <br />
          - Workforce adaptation: tackling the impact on 60M jobs in the
          Americas.
          <br />- AI's pivotal role in space discoveries and content creation
          growth.
        </p>
      )}
      {post.id === 8 && (
        <p>
          March 8th is more than just a date - It's a reminder of the battles
          fought, the progress made, and the road still ahead. It's a day to
          celebrate <b>your courage, your voice, and your endless potential</b>.
          <br />
          You are the dreamers, the builders, the innovators. The ones who break
          barriers, redefine possibilities, and inspire change.
          <br /> <br />
          In technology, in science, in leadership... Your presence shapes the
          future. Every line of code you write, every idea you bring to life,
          every challenge you overcome makes the world more inclusive, more
          innovative, more powerful.
          <br /> <br />
          So today, and every day, remember this: You are seen. You are valued.
          You are unstoppable. May your dreams be limitless, your power
          undeniable, and your journey filled with those who uplift and support
          you.
          <br />
          <br />
          <h3>Let's grow the community of women in tech together!</h3>
          💻✨ <b>Message me</b>, and I'll add you to our group, where we share
          challenges, opportunities, and support each other in the journey
          toward great jobs and personal projects.
          <br />
          <br /> And if you're reading this and need support, I'm here. 💜
        </p>
      )}

      <button className="back-button" onClick={() => navigate("/Blog")}>
        Back to Blog
      </button>
    </div>
  );
};

export default Post;
