import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { useEffect, useState } from "react";
import { allowedCharacters, roman2arabic } from "../lib/roman";

export default function Home() {
  const [arabic, setArabic] = useState<number>();
  const [roman, setRoman] = useState<string>("IV");
  const [error, setError] = useState<string | null>(null);

  const calculate = (roman: string) => {
    try {
      const romanUppercase = roman.toUpperCase();
      setError(null);
      setRoman(romanUppercase);
      setArabic(roman2arabic(romanUppercase));
    } catch (e) {
      setError(e.toString());
    }
  };

  useEffect(() => {
    calculate(roman);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Roman to arabic 1.0</h1>

        <p className={styles.description}>
          Alusia aplikacja do zamiany liczb rzymskich na łacińskie
        </p>

        <p>
          {Array.from(allowedCharacters).map(([roman, arabic]) => (
            <span>
              {roman} - {arabic},&nbsp;
            </span>
          ))}
        </p>

        <input
          className={styles.description}
          name="roman"
          type="text"
          value={roman}
          onInput={(event) => calculate(event.currentTarget.value)}
        />
        <p className={styles.description}>{arabic}</p>
        {error && (
          <p style={{ color: "red" }} color="red">
            {error}
          </p>
        )}

        {/*<div className={styles.grid}>*/}
        {/*  <a href="https://nextjs.org/docs" className={styles.card}>*/}
        {/*    <h3>Documentation &rarr;</h3>*/}
        {/*    <p>Find in-depth information about Next.js features and API.</p>*/}
        {/*  </a>*/}

        {/*  <a href="https://nextjs.org/learn" className={styles.card}>*/}
        {/*    <h3>Learn &rarr;</h3>*/}
        {/*    <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://github.com/vercel/next.js/tree/canary/examples"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h3>Examples &rarr;</h3>*/}
        {/*    <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
        {/*  </a>*/}

        {/*  <a href="https://vercel.com/new" className={styles.card}>*/}
        {/*    <h3>Deploy &rarr;</h3>*/}
        {/*    <p>*/}
        {/*      Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
