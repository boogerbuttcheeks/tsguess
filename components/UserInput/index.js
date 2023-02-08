export default function UserInput({ guess, setGuess, submitGuess, setPreviousGuess }) {
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
        setPreviousGuess(guess)
        submitGuess()
      }}>Submit</button>
    </>
  )
}