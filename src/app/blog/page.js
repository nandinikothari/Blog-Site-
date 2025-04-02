

// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '@/styles/Posts.module.css';

// const posts = [
//   {
//     id: 'harry-first-year',
//     title: "Harry's First Year at Hogwarts",
//     image: 'https://wallpaperaccess.com/full/3105067.jpg',
//     excerpt: "Harry Potter's journey began when he discovered he was a wizard...",
//   },
//   {
//     id: 'burrow-life',
//     title: "Life at the Burrow",
//     image: 'https://tse2.mm.bing.net/th?id=OIP.K-Q6-a_3PtImeXT7PAt2wgHaJb&pid=Api&P=0&h=180',
//     excerpt: "The Burrow, home to the Weasley family, is a place of warmth...",
//   },
//   {
//     id: 'dark-lord-returns',
//     title: "The Dark Lord Returns",
//     image: 'https://tse1.mm.bing.net/th?id=OIP.1d65j-3nEHBDNLx83V_j_wHaEK&pid=Api&P=0&h=180',
//     excerpt: "The wizarding world trembled as Lord Voldemort regained his power...",
//   },
// ];

// export default function BlogPosts() {
//   return (
//     <div className={styles.container}>
//       <h1>Blog Posts</h1>
//       <div className={styles.posts}>
//         {posts.map((post) => (
//           <Link key={post.id} href={`/posts/${post.id}`} className={styles.post}>
//             <div className={styles.imageContainer}>
//               <Image src={post.image} alt={post.title} width={300} height={400} className={styles.image} />
//             </div>
//             <h2>{post.title}</h2>
//             <p>{post.excerpt}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Posts.module.css';

const posts = [
  {
    id: 'harry-first-year',
    title: "Harry's First Year at Hogwarts",
    image: 'https://wallpaperaccess.com/full/3105067.jpg',
    excerpt: "Harry Potter's journey began when he discovered he was a wizard...",
  },
  {
    id: 'burrow-life',
    title: "Life at the Burrow",
    image: 'https://tse2.mm.bing.net/th?id=OIP.K-Q6-a_3PtImeXT7PAt2wgHaJb&pid=Api&P=0&h=180',
    excerpt: "The Burrow, home to the Weasley family, is a place of warmth...",
  },
  {
    id: 'dark-lord-returns',
    title: "The Dark Lord Returns",
    image: 'https://tse1.mm.bing.net/th?id=OIP.1d65j-3nEHBDNLx83V_j_wHaEK&pid=Api&P=0&h=180',
    excerpt: "The wizarding world trembled as Lord Voldemort regained his power...",
  },
];

export default function BlogPosts() {
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className={styles.post}>
            <div className={styles.imageContainer}>
              <Image src={post.image} alt={post.title} width={250} height={350} className={styles.image} />
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
