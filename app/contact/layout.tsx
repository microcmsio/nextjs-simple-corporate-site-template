import Image from 'next/image';
import styles from './layout.module.css';

export const metadata = {
  title: 'コンタクト｜Simple Blog',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.titleJa}>お問い合わせ</p>
        </div>
        <Image className={styles.bgimg} src="/img-main.jpg" alt="" width={4000} height={1200} />
      </section>
      <div className={styles.container}>{children}</div>
    </>
  );
}
