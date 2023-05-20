import Hero from '@/components/Hero';
import styles from './layout.module.css';

export const metadata = {
  title: 'メンバー｜Simple Blog',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <div className={styles.container}>{children}</div>
    </>
  );
}
