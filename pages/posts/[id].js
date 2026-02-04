import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Post.module.css'

export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{post.title} - Next.js Demo</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className={styles.container}>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ssr">SSR Route</Link></li>
            <li><Link href="/ssg">SSG Route</Link></li>
            <li><Link href="/posts/1">Post 1</Link></li>
            <li><Link href="/posts/2">Post 2</Link></li>
            <li><Link href="/posts/3">Post 3</Link></li>
          </ul>
        </nav>

        <div className="card">
          <div className={styles.postHeader}>
            <h1>{post.title}</h1>
            <span className={styles.postId}>Post ID: {post.id}</span>
          </div>

          <div className="image-container">
            <Image
              src={`https://picsum.photos/800/400?random=${post.id}`}
              alt={post.title}
              width={800}
              height={400}
            />
          </div>

          <div className={styles.postContent}>
            <p className={styles.description}>{post.description}</p>
            <div className={styles.postBody}>
              <p>{post.content}</p>
              <div className="meta">
                <strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}
              </div>
            </div>
          </div>

          <div className={styles.navigation}>
            <Link href="/" className="link-button">
              Back to Home
            </Link>
            {parseInt(post.id) > 1 && (
              <Link href={`/posts/${parseInt(post.id) - 1}`} className="link-button">
                Previous Post
              </Link>
            )}
            {parseInt(post.id) < 3 && (
              <Link href={`/posts/${parseInt(post.id) + 1}`} className="link-button">
                Next Post
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  // Pre-render these paths at build time
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ]

  return {
    paths,
    fallback: false, // Other routes will 404
  }
}

export async function getStaticProps({ params }) {
  // Fetch post data based on the dynamic route parameter
  const posts = {
    '1': {
      id: '1',
      title: 'Understanding Next.js Dynamic Routes',
      description: 'Learn how dynamic routes work in Next.js',
      content: 'Dynamic routes in Next.js allow you to create pages with dynamic parameters. This post demonstrates how to use the [id] syntax to create dynamic routes that can handle different post IDs. The getStaticPaths function defines which paths should be pre-rendered at build time, while getStaticProps fetches the data for each specific path.',
      author: 'John Doe',
      date: '2024-01-15',
    },
    '2': {
      id: '2',
      title: 'Server-Side Rendering vs Static Generation',
      description: 'A comparison of SSR and SSG in Next.js',
      content: 'Next.js offers two main rendering strategies: Server-Side Rendering (SSR) and Static Site Generation (SSG). SSR generates pages on each request, making it ideal for dynamic content that changes frequently. SSG pre-renders pages at build time, resulting in faster page loads and better SEO. Choose SSR when you need real-time data, and SSG for content that doesn\'t change often.',
      author: 'Jane Smith',
      date: '2024-01-20',
    },
    '3': {
      id: '3',
      title: 'Building API Routes in Next.js',
      description: 'Create backend endpoints with Next.js API routes',
      content: 'Next.js API routes allow you to build backend functionality directly in your Next.js application. These routes are serverless functions that can handle HTTP requests and return JSON responses. They\'re perfect for creating RESTful APIs, handling form submissions, or integrating with external services. API routes are located in the pages/api directory and automatically become available as endpoints.',
      author: 'Bob Johnson',
      date: '2024-01-25',
    },
  }

  const post = posts[params.id]

  return {
    props: {
      post,
    },
  }
}
