import styles from './Lyrics.module.css'
import { useEffect, useRef } from "react"

export default function Lyrics({ lyrics, guessesRemaining, gameStarted }) {
  const firstLineRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (firstLineRef.current) {
        firstLineRef.current.classList.add(styles.fadeIn);
      }
    }, 0);
  }, [])

  return (
    <div className={styles.wrapper}>
      {gameStarted && <p ref={firstLineRef} className={
        guessesRemaining <= 3 ? `${styles.fadeIn}` : ''
      }>
        <span className={styles.number}>1.</span> {lyrics.prev}
      </p>}

      {guessesRemaining <= 2 && lyrics && <p className={
        guessesRemaining <= 2 ? `${styles.fadeIn}` : ''
      }><span className={styles.number}>
          2.</span> {lyrics.lyric}
      </p>}

      {guessesRemaining <= 1 && lyrics && <p className={
        guessesRemaining <= 1 ? `${styles.fadeIn}` : ''
      }><span className={styles.number}>
          3.</span> {lyrics.next}
      </p>}
    </div>
  )
}