import { useState } from 'react'
import './Tweet.css'

const Tweet = ({ tweet, onLike, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    onLike(tweet.id)
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInMinutes = Math.floor((now - date) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Ahora'
    if (diffInMinutes < 60) return `${diffInMinutes}m`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`
    return `${Math.floor(diffInMinutes / 1440)}d`
  }

  return (
    <div className="tweet">
      <div className="tweet-header">
        <div className="tweet-user">
          <div className="avatar">👤</div>
          <div className="user-info">
            <span className="username">{tweet.username || 'Usuario'}</span>
            <span className="timestamp">{formatDate(tweet.id)}</span>
          </div>
        </div>
        <button className="btn-delete" onClick={() => onDelete(tweet.id)}>
          🗑️
        </button>
      </div>

      <div className="tweet-content">
        <p>{tweet.text}</p>
      </div>

      <div className="tweet-actions">
        <button 
          className={`btn-like ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {isLiked ? '❤️' : '🤍'} {tweet.likes}
        </button>
        <button className="btn-action">
          💬 0
        </button>
        <button className="btn-action">
          🔄 0
        </button>
        <button className="btn-action">
          📤
        </button>
      </div>
    </div>
  )
}

export default Tweet