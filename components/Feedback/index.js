import styles from './Feedback.module.css'

export default function Feedback({ isCorrect, isGameOver, previousGuess, guessesRemaining }) {
  if (guessesRemaining === 3) {
    return (
      <div className={styles.wrapper}>
      </div>
    )
  } else if (isCorrect) {
    return (
      <div className={`${styles.wrapper} ${styles.correct}`}>
        <p>Correct!</p>
      </div>
    )
  } else if (isGameOver) {
    return (
      <div className={`${styles.wrapper} ${styles.gameOver}`}>
        <p>Game Over</p>
      </div>
    )
  }
  else {
    return (
      <div className={`${styles.wrapper} ${styles.incorrect}`}>
        <p>{previousGuess} is not correct</p>
      </div >
    )
  }
}