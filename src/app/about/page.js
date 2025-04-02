// import styles from '@/styles/About.module.css';
// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className={styles.container}>
//       <h1>About This Blog</h1>
//       <p>Dedicated to the magical world of Harry Potter!</p>
//       <Image 
//         src="https://3.bp.blogspot.com/-2kGX-_QWGS8/VzPTvMEOspI/AAAAAAAArg0/C6gBZaIfcbIAhzK0xiyJYw-qyfRao6sCwCHM/s1600/189-harry-potter-hd-wallpapers-backgrounds-wallpaper-abyss.jpg" 
//         alt="Hogwarts Castle" 
//         width={500} 
//         height={300} 
//         className={styles.hogwartsImage}
//       />
//     </div>
//   );
// }
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>About This Blog</h1>
        <p>Dedicated to the magical world of Harry Potter!</p>
      </div>
    </div>
  );
}
