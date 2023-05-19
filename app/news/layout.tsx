import Hero from '@/components/Hero';
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
      <Hero title="News" sub="ニュース" />
      <div className={styles.container}>{children}</div>
    </>
  );
}
