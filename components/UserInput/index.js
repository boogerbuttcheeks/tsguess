import styles from './UserInput.module.css'

export default function UserInput({ guess, setGuess, submitGuess, setPreviousGuess, setIsGuessBlank, isGuessBlank }) {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={guess}
        placeholder="What is the name of this song?"
        onChange={(e) => {
          setGuess(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (guess === '') {
              setIsGuessBlank(true)
              return
            }

            setIsGuessBlank(false)
            setPreviousGuess(guess)
            submitGuess()
          }
        }}
      />
      <button onClick={() => {
        if (guess === '') {
          setIsGuessBlank(true)
          return
        }

        setIsGuessBlank(false)
        setPreviousGuess(guess)
        submitGuess()
      }}>Submit</button>
    </>
  )
}