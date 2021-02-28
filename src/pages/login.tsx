import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.bgLogin}>
      <div className={styles.loginContainer}>
        <Head>
          <title>Login | Move.it</title>
        </Head>

        <section>
          <div className={styles.loginFormBox}>
            <img src="/logo-full.svg" alt="Logo" />

            <header>
              <h1>Bem-vindo</h1>
              <span><img src="/icons/github.svg" alt=""/><p>Faça login no seu Github para começar</p></span>
            </header>

            <div className={styles.loginFormInput}>
              <input type="text" placeholder="Digite seu username" />

              <button type="submit"><img src="/icons/arrow-login.svg" alt=""/></button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
