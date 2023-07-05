import Hero from '@/components/Hero';
import Sheet from '@/components/Sheet';

export const metadata = {
  title: '事業内容｜シンプルなコーポレートサイト',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Business" sub="事業内容" />
      <Sheet>{children}</Sheet>
    </>
  );
}
