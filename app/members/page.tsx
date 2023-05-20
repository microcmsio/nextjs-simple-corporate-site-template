import Image from 'next/image';
import { getMembersList } from '@/libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getMembersList();
  return (
    <div className={styles.container}>
      <ul>
        {data.contents.map((member) => (
          <li key={member.id} className={styles.list}>
            <Image
              src={member.image?.url as string}
              alt=""
              width={member.image?.width}
              height={member.image?.height}
              className={styles.image}
            />
            <dl>
              <dt className={styles.name}>{member.name}</dt>
              <dd className={styles.position}>{member.position}</dd>
              <dd className={styles.profile}>{member.profile}</dd>
            </dl>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <h2 className={styles.message}>We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="">採用情報へ</ButtonLink>
      </div>
    </div>
  );
}
