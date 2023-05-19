import Hero from '@/components/Hero';
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
      <Hero title="Contact" sub="お問い合わせ" />
      <div className={styles.container}>{children}</div>
    </>
  );
}
