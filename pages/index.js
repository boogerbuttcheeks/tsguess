import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react"

import Lyrics from "@/components/Lyrics"
import UserInput from "@/components/UserInput"

const albums = [
  {
    name: "Taylor Swift",
    songs: ["A Perfectly Good Heart", "A Place In This World", "Invisible", "Mary's Song (Oh My My My)", "Our Song", "Should've Said No", "Stay Beautiful", "Teardrops on My Guitar", "The Outside", "Tim McGraw", "Tied Together with a Smile", "Cold as You", "I'm Only Me When I'm With You"]
  },
  {
    name: "Fearless (Taylor's Version)",
    songs: ["Breathe", "Bye Bye Baby", "Change", "Come In With The Rain", "Don't You", "Fearless", "Fifteen", "Forever & Always", "Hey Stephen", "Jump Then Fall", "Love Story", "Mr. Perfectly Fine", "Superstar", "Tell Me Why", "That's When", "The Best Day", "The Other Side of the Door", "The Way I Loved You", "Today Was a Fairytale", "Untouchable", "White Horse", "You All Over Me", "You Belong With Me", "You're Not Sorry", "We Were Happy"]
  },
  {
    name: "Speak Now",
    songs: ["Back to December", "Better Than Revenge", "Dear John", "Enchanted", "Haunted", "Innocent", "Last Kiss", "Long Live", "Mean", "Mine", "Never Grow Up", "Sparks Fly", "Speak Now", "The Story Of Us"]
  },
  {
    name: "Red (Taylor's Version)",
    songs: ["22", "All Too Well (10 Minute Version)", "All Too Well", "Babe", "Begin Again", "Better Man", "Come Back...Be Here", "Everything Has Changed", "Forever Winter", "Girl At Home", "Holy Gscore", "I Almost Do", "I Bet You Think About Me", "I Knew You Were Trouble", "Message In A Bottle", "Nothing New", "Red", "Ronan", "Run", "Sad Beautiful Tragic", "Starlight", "State of Grace", "Stay Stay Stay", "The Last Time", "The Lucky One", "The Moment I Knew", "The Very First Night", "Treacherous", "We Are Never Ever Getting Back Together"]
  },
  {
    name: "1989 (Deluxe)",
    songs: ["All You Had to Do Was Stay", "Bad Blood", "Clean", "How You Get The Girl", "I Know Places", "I Wish You Would", "New Romantics", "Out Of The Woods", "Style", "Welcome to New York", "Wonderland", "You Are in Love", "Blank Space", "Shake It Off"]
  },
  {
    name: "reputation",
    songs: ["Call It What You Want", "Dancing with Our Hands Tied", "Dress", "End Game", "Getaway Car", "Gorgeous", "I Did Something Bad", "King Of My Heart", "Look What You Made Me Do", "New Year's Day", "So It Goes...", "This Is Why We Can't Have Nice Things", "Don't Blame Me", "...Ready for It?", "Delicate"]
  },
  {
    name: "Lover",
    songs: ["Afterglow", "Cornelia Street", "Cruel Summer", "Daylight", "Death by a Thousand Cuts", "False God", "I Forgot That You Existed", "I Think He Knows", "It's Nice to Have a Friend", "London Boy", "Lover", "ME!", "Miss Americana & The Heartbreak Prince", "Paper Rings", "Soon You'll Get Better", "The Archer", "The Man", "You Need To Calm Down"]
  },
  {
    name: "folklore",
    songs: ["august", "betty", "cardigan", "epiphany", "exile", "hoax", "illicit affairs", "invisible string", "mad woman", "mirrorball", "my tears ricochet", "peace", "seven", "the 1", "the last great american dynasty", "this is me trying"]
  },
  {
    name: "evermore",
    songs: ["ivy", "marjorie", "champagne problems", "closure", "coney island", "cowboy like me", "dorothea", "evermore", "gold rush", "happiness", "long story short", "no body, no crime", "'tis the damn season", "tolerate it", "willow"]
  },
  {
    name: "Midnights (3am Edition)",
    songs: ["Anti-Hero", "Bejeweled", "Bigger Than The Whole Sky", "Dear Reader", "Glitch", "High Infidelity", "Karma", "Labyrinth", "Lavender Haze", "Maroon", "Mastermind", "Midnight Rain", "Paris", "Question...?", "Snow On the Beach", "Sweet Nothing", "The Great War", "Vigilante Shit", "Would've, Could've, Should've", "You're On Your Own, Kid"]
  }
]

export default function Home() {

  // All possible game states
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const [album, setAlbum] = useState('')
  const [song, setSong] = useState('')
  const [lyrics, setLyrics] = useState({})

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [guessesRemaining, setGuessesRemaining] = useState(3)
  const [guess, setGuess] = useState('')

  const isGameOver = guessesRemaining === 0

  useEffect(() => {
    fetch('/ts.json')
      .then(response => response.json())
      .then(data => {
        console.log("useEffect ran")

        if (album != '') {
          const lyrics = data[`${album}`][`${song}`]

          // Use the second lyric object, which has
          // current line, prev line, and next line
          // Gets the first three lines in the song
          setLyrics(lyrics[1])
          console.log(lyrics[1])
        }
      });
  }, [album]);

  useEffect(() => {
    let localHighScore = localStorage.getItem('highScore')

    if (localHighScore) {
      console.log(localHighScore)
      setHighScore(localHighScore)
    }

    if (score > localHighScore) {
      setHighScore(score)
      console.log('set new high score')
      localStorage.setItem('highScore', highScore)
    }
  })

  function submitGuess() {
    if (compareGuessToAnswer(guess, song)) {
      setScore(score => score + 1)
      setIsCorrect(true)
      setGuess('')
    } else {
      setIsCorrect(false)
      setGuessesRemaining(guessesRemaining - 1)
      setGuess('')
    }
  }

  function compareGuessToAnswer(guess, answer) {
    guess = guess.toLowerCase().replace(/[^\w\s]/gi, '').trim()
    answer = answer.toLowerCase().replace(/[^\w\s]/gi, '').trim()
    return guess === answer
  }

  function getRandomSong() {
    const album = albums[getNumberFromZeroToNine()]
    const albumLength = album.songs.length
    const songNumber = getNumberFromZeroToX(albumLength)
    const song = album.songs[songNumber]

    console.log(album)
    console.log('Song: ' + song)

    setAlbum(album.name)
    setSong(song)

    return { album: album.name, song: song }
  }

  function getNumberFromZeroToNine() {
    return Math.floor(Math.random() * 10)
  }

  function getNumberFromZeroToX(x) {
    return Math.floor(Math.random() * x)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>tsguess</h1>

        <p>High Score: {highScore}</p>
        <p>Score: {score}</p>

        {!gameStarted && <button onClick={() => {
          setGameStarted(true)
          getRandomSong()
        }}>Start</button>}

        {isCorrect && <button onClick={() => {
          setGuessesRemaining(3)
          setIsCorrect(false)
          getRandomSong()
        }}>Next Question</button>}

        {isGameOver && <button onClick={() => {
          setScore(0)
          setGameStarted(true)
          setGuessesRemaining(3)
          getRandomSong()
        }
        }>Play Again</button>}

        {gameStarted && !isCorrect && !isGameOver &&
          <UserInput
            guess={guess}
            setGuess={setGuess}
            submitGuess={submitGuess}
            isCorrect={isCorrect} />
        }

        <Lyrics
          guessesRemaining={guessesRemaining}
          lyrics={lyrics}
        />
      </main>
    </>
  )
}