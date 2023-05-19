import Image from 'next/image';
import styles from './layout.module.css';

export const metadata = {
  title: 'ニュース｜Simple Blog',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>News</h1>
          <p className={styles.titleJa}>ニュース</p>
        </div>
        <Image className={styles.bgimg} src="/img-main.jpg" alt="" width={4000} height={1200} />
      </section>
      <div className={styles.container}>{children}</div>
    </>
  );
}
