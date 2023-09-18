'use client';
import React, { useRef, useState } from 'react';
import styles from './index.module.css';

export default function ContactForm() {
  const lastnameRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastname: lastnameRef.current?.value,
        firstname: firstnameRef.current?.value,
        company: companyRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
    }).then((res) => res.json());
    if (res.status === 'error') {
      setError(res.message);
    } else {
      setSuccess(true);
    }
  };
  if (success) {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input className={styles.textfield} type="text" id="lastname" ref={lastnameRef} />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input className={styles.textfield} type="text" id="firstname" ref={firstnameRef} />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="conpany">
          会社名
        </label>
        <input className={styles.textfield} type="text" id="company" ref={companyRef} />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input className={styles.textfield} type="text" id="email" ref={emailRef} />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea className={styles.textarea} id="message" ref={messageRef} />
      </div>
      <div className={styles.actions}>
        <p className={styles.error}>{error}</p>
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
