//main front page

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Harry Potter Blog</title>
        <meta name="description" content="A blog about the wizarding world of Harry Potter" />
      </Head>

      {/* Navigation */}
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/posts">Blog Posts</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <h1>⚡ Welcome to the Harry Potter Blog ⚡</h1>
        <p className="tagline">Your ultimate source for everything in the Wizarding World!</p>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Harry Potter Blog. All rights reserved.</p>
      </footer>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          background-image: url('/images/background.jpg'); /* Add this image in public/images */
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        nav ul {
          display: flex;
          gap: 20px;
          list-style: none;
          background: rgba(0, 0, 0, 0.7);
          padding: 10px 20px;
          border-radius: 10px;
        }

        nav ul li {
          display: inline;
        }

        nav ul li  {
          color: white; /* Changed text color to white */
          font-weight: bold;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 8px 12px;
          transition: all 0.3s ease;
        }

        nav ul li a:hover {
          background: rgba(255, 215, 0, 0.3);
          border-radius: 5px;
          color: #f5c518; /* Added hover effect: turns golden */
        }

        main {
          margin-top: 50px;
          background: rgba(0, 0, 0, 0.6);
          padding: 30px;
          border-radius: 10px;
          width: 80%;
          max-width: 600px;
        }

        h1 {
          font-size: 2.5rem;
          color: #f5c518;
          text-shadow: 2px 2px 8px black;
        }

        .tagline {
          font-size: 1.2rem;
          font-style: italic;
          opacity: 0.9;
        }

        footer {
          margin-top: 50px;
          font-size: 0.9rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 10px 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
