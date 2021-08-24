import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tranquility Software</title>
        <meta name="description" content="Tranquility Software Pretoria" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}