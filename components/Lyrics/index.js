export default function Lyrics({ lyrics, guessesRemaining }) {
  return (
    <>
      {lyrics && <p>{lyrics.prev}</p>}
      {guessesRemaining <= 2 && lyrics && <p>{lyrics.lyric}</p>}
      {guessesRemaining <= 1 && lyrics && <p>{lyrics.next}</p>}
    </>
  )
}