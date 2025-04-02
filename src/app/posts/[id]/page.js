
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import styles from '@/styles/PostDetail.module.css';

// const postContent = {
//   'harry-first-year': {
//     title: "Harry's First Year at Hogwarts",
//     content: `Harry Potter's journey began when he discovered he was a wizard. 
//               He met Ron and Hermione on the train to Hogwarts, faced a troll, 
//               and eventually confronted Professor Quirrell, who was hiding Voldemort. 
//               This marked the beginning of his incredible adventures.`,
//     image: 'https://wallpaperaccess.com/full/3105067.jpg',
//   },
//   'burrow-life': {
//     title: "Life at the Burrow",
//     content: `The Burrow, home to the Weasley family, is a magical, cozy house filled with love. 
//               From enchanted dishes to the ghoul in the attic, it became a second home for Harry. 
//               He spent his summers here, enjoying the warmth and chaos of the Weasley family.`,
//     image: 'https://tse2.mm.bing.net/th?id=OIP.K-Q6-a_3PtImeXT7PAt2wgHaJb&pid=Api&P=0&h=180',
//   },
//   'dark-lord-returns': {
//     title: "The Dark Lord Returns",
//     content: `The wizarding world trembled as Lord Voldemort regained his power. 
//               From the rebirth ceremony in the graveyard to the Battle of Hogwarts, 
//               his return was a terrifying time for the wizarding community. 
//               The Order of the Phoenix and Dumbledore's Army fought back bravely.`,
//     image: 'https://tse1.mm.bing.net/th?id=OIP.1d65j-3nEHBDNLx83V_j_wHaEK&pid=Api&P=0&h=180',
//   },
// };

// export default function PostDetail({ params }) {
//   const post = postContent[params.id];
//   if (!post) return notFound();

//   return (
//     <div className={styles.container}>
//       <div className={styles.imageWrapper}>
//         <Image src={post.image} alt={post.title} width={500} height={600} className={styles.image} />
//       </div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// }

import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/PostDetail.module.css';

const postContent = {
  'harry-first-year': {
    title: "Harry's First Year at Hogwarts",
    content: `Harry Potter's journey began when he discovered he was a wizard. 
              He met Ron and Hermione on the train to Hogwarts, faced a troll, 
              and eventually confronted Professor Quirrell, who was hiding Voldemort. 
              This marked the beginning of his incredible adventures.`,
    image: 'https://wallpaperaccess.com/full/3105067.jpg',
  },
  'burrow-life': {
    title: "Life at the Burrow",
    content: `The Burrow, home to the Weasley family, is a magical, cozy house filled with love. 
              From enchanted dishes to the ghoul in the attic, it became a second home for Harry. 
              He spent his summers here, enjoying the warmth and chaos of the Weasley family.`,
    image: 'https://tse2.mm.bing.net/th?id=OIP.K-Q6-a_3PtImeXT7PAt2wgHaJb&pid=Api&P=0&h=180',
  },
  'dark-lord-returns': {
    title: "The Dark Lord Returns",
    content: `The wizarding world trembled as Lord Voldemort regained his power. 
              From the rebirth ceremony in the graveyard to the Battle of Hogwarts, 
              his return was a terrifying time for the wizarding community. 
              The Order of the Phoenix and Dumbledore's Army fought back bravely.`,
    image: 'https://tse1.mm.bing.net/th?id=OIP.1d65j-3nEHBDNLx83V_j_wHaEK&pid=Api&P=0&h=180',
  },
};

export default function PostDetail({ params }) {
  const post = postContent[params.id];
  if (!post) return notFound();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={post.image} alt={post.title} width={400} height={500} className={styles.image} />
      </div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

