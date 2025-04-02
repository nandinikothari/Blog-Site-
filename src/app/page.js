// import styles from '@/styles/Home.module.css';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className={styles.container}>
//       <div className={styles.content}>
//         <h1>⚡ Welcome to the Harry Potter Blog ⚡</h1>
//         <p>Your ultimate source for everything in the Wizarding World!</p>
//         <Image 
//           src="https://wallpapercave.com/wp/j1lALye.jpg" 
//           alt="Harry Potter" 
//           width={300} 
//           height={400} 
//           className={styles.characterImage}
//         />
//       </div>
//     </main>
//   );
// }
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>⚡ Welcome to the Harry Potter Blog ⚡</h1>
        <p>Your ultimate source for everything in the Wizarding World!</p>
        <Image 
          src="https://wallpapercave.com/wp/j1lALye.jpg" 
          alt="Hogwarts" 
          width={500} 
          height={300} 
          className={styles.image} 
        />
      </div>
    </main>
  );
}
