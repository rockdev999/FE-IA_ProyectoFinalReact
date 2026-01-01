import { useState, useEffect } from 'react'
import TweetList from '../components/TweetList'
import TweetForm from '../components/TweetForm'
import './Home.css'

const Home = () => {
  const [tweets, setTweets] = useState([])

  // Cargar tweets del localStorage al iniciar
  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem('tweets')) || []
    setTweets(storedTweets)
  }, [])

  // Guardar tweets en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets))
  }, [tweets])

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      username: 'Usuario',
    }
    setTweets([newTweet, ...tweets])
  }

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    )
  }

  const deleteTweet = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este tweet?')) {
      setTweets(tweets.filter((tweet) => tweet.id !== id))
    }
  }

  return (
    <div className="home">
      <div className="home-header">
        <h2>Inicio</h2>
      </div>
      
      <TweetForm onAddTweet={addTweet} />
      
      <div className="timeline-divider">
        <span>Timeline</span>
      </div>
      
      <TweetList 
        tweets={tweets} 
        onLike={likeTweet}
        onDelete={deleteTweet}
      />
    </div>
  )
}

export default Home