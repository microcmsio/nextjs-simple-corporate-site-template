import Hero from '@/app/_components/Hero';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Hero title="404" sub="Not Found" />
      <div className={styles.container}>
        <dl>
          <dt className={styles.title}>ページが見つかりませんでした</dt>
          <dd className={styles.text}>
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLを再度ご確認ください。
          </dd>
        </dl>
      </div>
    </>
  );
}
