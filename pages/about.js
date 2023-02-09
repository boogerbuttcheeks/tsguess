import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/About.module.css"

import NewPostForm from "@/components/NewCommentForm"

export default function About() {
  const router = useRouter()

  const handleSubmit = async ({ name, code }) => {
    const { data } = await axios.post('/api/comments', {
      name,
      comment,
    })
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>about | tsguess</title>
        <meta name="description" content="Guess Taylor Swift songs by their lyrics!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <h1 onClick={() => { router.push('/') }}>tsguess</h1>
          <Link rel="nofollow noopener noreferrer" href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </Link>
        </nav>
        <hr />
        <p><strong>Instructions: </strong></p>
        <p>Guess the Taylor Swift song from the lyrics. You have 3 guesses per song. Good luck!</p>
        <br />
        <Link href="https://github.com/boogerbuttcheeks/tsguess/issues">Report an issue</Link>
        <p>Made by <Link href="https://www.trevortylerlee.com/">Trevor Lee</Link></p>

        <hr />

        <NewPostForm onSubmit={handleSubmit} />
      </main>
    </>
  )
}