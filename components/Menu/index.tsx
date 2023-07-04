'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/business" onClick={close}>
              事業内容
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              メンバー
            </Link>
          </li>
          <li>
            <Link href="" onClick={close}>
              採用情報
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
