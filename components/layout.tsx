import Head from 'next/head';
import styles from './layout.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Layouts Example</title>
    </Head>
    <main className={styles.main}>{children}</main>
  </>
);
export default Layout;
