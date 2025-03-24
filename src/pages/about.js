//about us page

import Head from 'next/head';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About - Harry Potter Blog</title>
      </Head>

      <main>
        <h1>⚡ About This Blog ⚡</h1>
        <p>
          Welcome to the ultimate Harry Potter Blog, where we discuss spells, magical creatures, characters, 
          and hidden secrets of the Wizarding World. Whether you're a Hogwarts student at heart or just curious 
          about the magic, there's something for you here!
        </p>
      </main>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          background-image: url('/images/harry.jpg'); 
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 20px;
        }

        main {
          background: rgba(0, 0, 0, 0.7);
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

        p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
