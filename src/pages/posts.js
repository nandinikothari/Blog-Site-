// src/pages/posts.js
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Posts() {
  const [activePost, setActivePost] = useState(null);
  const router = useRouter();

  const handlePostClick = (postId) => {
    setActivePost(postId);
    router.push(`/${postId}`);
  };

  return (
    <div className="container">
      <Head>
        <title>Harry Potter Blog - Posts</title>
      </Head>

      <main>
        <h1>📜 Blog Posts</h1>
        <div className="post-list">
          {[
            { id: "harry-first-year", title: "Harry's First Year at Hogwarts", desc: "Discover how Harry began his magical journey...", img: "/images/hogwarts.jpg" },
            { id: "burrow-life", title: "Life at the Burrow", desc: "A glimpse into the Weasleys' home...", img: "/images/burrow.jpg" },
            { id: "dark-lord-returns", title: "The Dark Lord Returns", desc: "The rise of Voldemort and the Second Wizarding War...", img: "/images/voldemort.jpg" }
          ].map((post) => (
            <div key={post.id} className={`post ${activePost === post.id ? 'active' : ''}`} onClick={() => handlePostClick(post.id)}>
              <div className="post-image" style={{ backgroundImage: `url(${post.img})` }}></div>
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          background-image: url('/images/hall.jpg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #fff;
          padding: 20px;
        }

        main {
          margin-top: 50px;
          background: rgba(0, 0, 0, 0.7);
          padding: 30px;
          border-radius: 10px;
          width: 90%;
          max-width: 800px;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #f5c518;
        }

        .post-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .post {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .post:hover {
          transform: scale(1.05);
          background: rgba(255, 215, 0, 0.3);
        }

        .post.active .post-image {
          opacity: 0.5; /* Makes the background image slightly opaque on click */
        }

        .post-image {
          width: 120px;
          height: 120px;
          background-size: cover;
          background-position: center;
          transition: opacity 0.3s ease;
        }

        .post-content {
          padding: 15px;
          text-align: left;
          color: white;
        }

        .post-content h2 {
          margin: 0;
          font-size: 1.5rem;
        }

        .post-content p {
          margin: 5px 0 0;
          font-size: 1rem;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
