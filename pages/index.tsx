import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>KHMER25MV.COM</title>
        <meta name="description" content="Watch HD movies, tv-series BluRay, WEB-DL, WEBRip 1080p, 720p, online with subtitles for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://khmer25mv.com/">KHMER25MV.COM!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://khmer25mv.com/" className={styles.card}>
            <h2>KHMER25MV &rarr;</h2>
            <p>Watch HD movies, tv-series BluRay, WEB-DL, WEBRip 1080p, 720p, online with subtitles for free.</p>
          </a>
        </div>
        <Image src="/cover.jpg" alt="Cover Image" className="bg-img" width={1280} height={720} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
