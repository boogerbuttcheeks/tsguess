export default function UserInput({ guess, setGuess, submitGuess, isCorrect }) {
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
        console.log({ guess })
        submitGuess()
      }}>Submit</button>
    </>
  )
}