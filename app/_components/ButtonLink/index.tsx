import Link from 'next/link';
import styles from './index.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

export default function ButtonLink({ href, children, isExternal = false }: Props) {
  if (isExternal) {
    return (
      <a href={href} className={styles.button} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
