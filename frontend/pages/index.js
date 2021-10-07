import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Landing from '../components/Landing'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tranquility Software</title>
        <meta name="description" content="Tranquility Software Pretoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Landing />
      </main>

      <footer>
      </footer>
  
    </div>
  )
}