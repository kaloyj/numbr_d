import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>numbr_d</title>
        {/* favicon code by https://css-tricks.com/emojis-as-favicons/ */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>"
        />
        <meta
          name="description"
          content="A simple phonewords generator. Simply enter a number string and generate. ✏️"
        />
      </Head>

      <main>
        <h1>numbr_d</h1>
        <p>generate phonewords from any number</p>
      </main>
    </div>
  );
}
