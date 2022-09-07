import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tour-Is-Me</title>
        <meta name="description" content="A tourism related website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tour-Is-Me!</h1>

        <p className={styles.subtitle}>
          A platform to gather all the travel related information and distribute
          them to the travel enthusiastics
        </p>
      </main>
    </div>
  );
}
