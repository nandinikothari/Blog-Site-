import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/blog">Blog Posts</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
