import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome page</h1>
      <main>
        <Link href="/anotherPage">
          <a>Link to another page</a>
        </Link>
      </main>
    </div>
  )
}
