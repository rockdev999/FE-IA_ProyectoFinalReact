import { useState, useEffect } from 'react'
import TweetList from '../components/TweetList'
import './Profile.css'

const Profile = () => {
  const [tweets, setTweets] = useState([])
  const [stats, setStats] = useState({
    totalTweets: 0,
    totalLikes: 0,
  })

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem('tweets')) || []
    setTweets(storedTweets)
    
    const totalLikes = storedTweets.reduce((sum, tweet) => sum + tweet.likes, 0)
    setStats({
      totalTweets: storedTweets.length,
      totalLikes: totalLikes,
    })
  }, [])

  const likeTweet = (id) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
    )
    setTweets(updatedTweets)
    localStorage.setItem('tweets', JSON.stringify(updatedTweets))
    
    const totalLikes = updatedTweets.reduce((sum, tweet) => sum + tweet.likes, 0)
    setStats({
      totalTweets: updatedTweets.length,
      totalLikes: totalLikes,
    })
  }

  const deleteTweet = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este tweet?')) {
      const updatedTweets = tweets.filter((tweet) => tweet.id !== id)
      setTweets(updatedTweets)
      localStorage.setItem('tweets', JSON.stringify(updatedTweets))
      
      const totalLikes = updatedTweets.reduce((sum, tweet) => sum + tweet.likes, 0)
      setStats({
        totalTweets: updatedTweets.length,
        totalLikes: totalLikes,
      })
    }
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <div className="profile-avatar">👤</div>
          <div className="profile-details">
            <h2>Usuario</h2>
            <p className="profile-username">@usuario</p>
            <p className="profile-bio">
              🚀 Desarrollador | 💻 Amante de la tecnología | 🐦 Twitter Clone
            </p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{stats.totalTweets}</span>
                <span className="stat-label">Tweets</span>
              </div>
              <div className="stat">
                <span className="stat-number">125</span>
                <span className="stat-label">Siguiendo</span>
              </div>
              <div className="stat">
                <span className="stat-number">340</span>
                <span className="stat-label">Seguidores</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.totalLikes}</span>
                <span className="stat-label">Likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="tab active">Tweets</button>
        <button className="tab">Respuestas</button>
        <button className="tab">Media</button>
        <button className="tab">Likes</button>
      </div>

      <TweetList 
        tweets={tweets} 
        onLike={likeTweet}
        onDelete={deleteTweet}
      />
    </div>
  )
}

export default Profile