import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'シンプルなコーポレートサイト',
  description: 'microCMS公式が提供するシンプルなコーポレートサイトのテンプレートです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description: 'microCMS公式が提供するシンプルなコーポレートサイトのテンプレートです。',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
