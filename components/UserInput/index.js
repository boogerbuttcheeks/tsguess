export default function UserInput({ guess, setGuess, submitGuess, setPreviousGuess, setIsGuessBlank, isGuessBlank }) {
  return (
    <>
      <input
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value)
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