import styles from './Lyrics.module.css'
import { useEffect, useRef } from "react"

export default function Lyrics({ lyrics, guessesRemaining }) {
  const firstLineRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (firstLineRef.current) {
        firstLineRef.current.classList.add(styles.fadeIn);
      }
    }, 0);
  }, [])

  return (
    <div>
      {lyrics && <p ref={firstLineRef}>{lyrics.prev}</p>}
      {guessesRemaining <= 2 && lyrics && <p className={
        guessesRemaining <= 2 ? `${styles.fadeIn}` : ''
      }>{lyrics.lyric}</p>}
      {guessesRemaining <= 1 && lyrics && <p className={
        guessesRemaining <= 1 ? `${styles.fadeIn}` : ''
      }>{lyrics.next}</p>}
    </div>
  )
}