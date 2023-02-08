export default function Lyrics({ lyrics, guessesRemaining }) {
  return (
    <>
      <h2>Guesses left: {guessesRemaining}</h2>
      {lyrics && <p>{lyrics.prev}</p>}
      {lyrics && <p>{lyrics.lyric}</p>}
      {lyrics && <p>{lyrics.next}</p>}
    </>
  )
}