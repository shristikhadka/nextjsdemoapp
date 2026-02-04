import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/SSG.module.css'

export default function SSG({ buildTime, staticData }) {
  return (
    <>
      <Head>
        <title>Static Site Generation (SSG) - Next.js Demo</title>
        <meta name="description" content="This page is pre-rendered at build time" />
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
          <h1>Static Site Generation (SSG)</h1>
          <p>
            This page uses <strong>getStaticProps</strong> to pre-render the page
            at build time. The content is generated once when the site is built.
          </p>

          <div className={styles.content}>
            <div className="meta">
              <strong>Build Time:</strong> {buildTime}
            </div>
            <div className="meta">
              <strong>Static Data:</strong> {staticData}
            </div>

            <div className="image-container">
              <Image
                src="https://picsum.photos/800/400?random=2"
                alt="Static image from Picsum"
                width={800}
                height={400}
              />
            </div>

            <p>
              Notice that the build time stays the same on each page refresh,
              demonstrating that this page was pre-rendered at build time.
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

export async function getStaticProps() {
  // This function runs at build time
  const buildTime = new Date().toLocaleString()
  const staticData = 'This data was generated at build time and remains constant.'

  return {
    props: {
      buildTime,
      staticData,
    },
  }
}
