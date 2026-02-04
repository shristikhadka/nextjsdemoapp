import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Demo App - Home</title>
        <meta name="description" content="Next.js application demonstrating SSR, SSG, dynamic routes, and API endpoints" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ssr">SSR Route</Link></li>
            <li><Link href="/ssg">SSG Route</Link></li>
            <li><Link href="/posts/1">Dynamic Route (Post 1)</Link></li>
            <li><Link href="/posts/2">Dynamic Route (Post 2)</Link></li>
            <li><Link href="/posts/3">Dynamic Route (Post 3)</Link></li>
            <li><Link href="/api/data">API Endpoint</Link></li>
          </ul>
        </nav>

        <div className="card">
          <h1>Welcome to Next.js Demo Application</h1>
          <p>
            This application demonstrates various Next.js features including:
          </p>
          <ul className={styles.featureList}>
            <li>Server-Side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>Dynamic Routes</li>
            <li>API Routes</li>
            <li>Next.js Components (Head, Image, Link)</li>
            <li>Global and Component Styles</li>
          </ul>

          <div className={styles.buttonGroup}>
            <Link href="/ssr" className="link-button">
              View SSR Route
            </Link>
            <Link href="/ssg" className="link-button">
              View SSG Route
            </Link>
            <Link href="/posts/1" className="link-button">
              View Dynamic Route
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
