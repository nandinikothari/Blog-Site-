//internal pages of blog posts

import { useRouter } from 'next/router';
import Head from 'next/head';

const postContent = {
  'harry-first-year': {
    title: "Harry's First Year at Hogwarts",
    content: `Harry Potter's journey began when he discovered he was a wizard. 
      From his first ride on the Hogwarts Express to his adventures with Ron and Hermione, 
      his first year was full of magic and mystery.`,
    image: '/images/hogwarts.jpg'
  },
  'burrow-life': {
    title: "Life at the Burrow",
    content: `The Burrow, home to the Weasley family, was a place of warmth, love, and constant chaos. 
      It became a second home for Harry, filled with magical surprises and delicious feasts.`,
    image: '/images/burrow.jpg'
  },
  'dark-lord-returns': {
    title: "The Dark Lord Returns",
    content: `The wizarding world trembled as Lord Voldemort regained his full strength. 
      The rise of the Death Eaters and the Second Wizarding War changed everything.`,
    image: '/images/voldemort.jpg'
  },
};

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const post = postContent[id];

  if (!post) return <p>Post not found</p>;

  return (
    <div style={{
      backgroundImage: `url(${post.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Head>
        <title>{post.title} - Harry Potter Blog</title>
      </Head>
      
      <main style={{
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </main>
    </div>
  );
}
