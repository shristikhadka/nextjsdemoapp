import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/SSR.module.css'

export default function SSR({ serverTime, randomNumber }) {
  return (
    <>
      <Head>
        <title>Server-Side Rendering (SSR) - Next.js Demo</title>
        <meta name="description" content="This page is rendered on the server on each request" />
      </Head>

      <div className={styles.container}>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ssr">SSR Route</Link></li>
            <li><Link href="/ssg">SSG Route</Link></li>
            <li><Link href="/posts/1">Dynamic Route</Link></li>
          </ul>
        </nav>

        <div className="card">
          <h1>Server-Side Rendering (SSR)</h1>
          <p>
            This page uses <strong>getServerSideProps</strong> to fetch data on each request.
            The content is generated on the server before being sent to the client.
          </p>

          <div className={styles.content}>
            <div className="meta">
              <strong>Server Time:</strong> {serverTime}
            </div>
            <div className="meta">
              <strong>Random Number (generated on server):</strong> {randomNumber}
            </div>

            <div className="image-container">
              <Image
                src="https://picsum.photos/800/400"
                alt="Random image from Picsum"
                width={800}
                height={400}
                priority
              />
            </div>

            <p>
              Notice that the server time updates on each page refresh, demonstrating
              that this page is rendered on the server for every request.
            </p>

            <Link href="/" className="link-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // This function runs on the server on every request
  const serverTime = new Date().toLocaleString()
  const randomNumber = Math.floor(Math.random() * 1000)

  return {
    props: {
      serverTime,
      randomNumber,
    },
  }
}
