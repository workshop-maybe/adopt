import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getStylePlaygroundPages } from '../lib/stylePlaygroundList'
import Layout from '../components/layout'

export async function getStaticProps() {
  const getStyleExamples = getStylePlaygroundPages()
  return {
    props: {
      getStyleExamples
    }
  }
}

export default function Home({ getStyleExamples }) {

  console.log(getStyleExamples)

  return (
    <Layout>
        <Head>
          <title>ADOPT POOL</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hello Adopt</h1>
        <Link href='/about'>About Page</Link>

      <h2>Style Playground (long way)</h2>
      <Link href='/styleplayground/field'>Field</Link>
      <Link href='/styleplayground/ryan'>Ryan</Link>
      <Link href='/styleplayground/brayden'>Brayden</Link>
      <Link href='/styleplayground/juan'>Juan</Link>
      <Link href='/styleplayground/eric'>Eric</Link>
      <Link href='/styleplayground/cole'>Cole</Link>
      <Link href='/styleplayground/dan'>Dan</Link>
      <Link href='/styleplayground/quasar'>Quasar</Link>
      <Link href='/styleplayground/a'>A</Link>
      <Link href='/styleplayground/kyle'>Kyle</Link>
      <Link href='/styleplayground/colin'>Colin</Link>
      <Link href='/styleplayground/james'>James</Link>

      <h2>Style Playground (short way)</h2>
      <ul>
        {getStyleExamples.map((somethinglala) => (
          
            <li>{somethinglala}</li>
          
        ))}
      </ul>
    </Layout>
  )
}
