import Link from 'next/link';
import styles from './sidebar.module.css';

const Sidebar = () => (
  <nav className={styles.nav}>
    <input className={styles.input} placeholder="Search..." />
    <Link href="/account">
      <a>Account</a>
    </Link>
    <Link href="/business">
      <a>Business</a>
    </Link>
  </nav>
);
export default Sidebar;
