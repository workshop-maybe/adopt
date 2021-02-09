import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ADOPT POOL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is the about page</h1>

    </div>
  )
}