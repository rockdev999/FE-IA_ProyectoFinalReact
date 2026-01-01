import Tweet from './Tweet'
import './TweetList.css'

const TweetList = ({ tweets, onLike, onDelete }) => {
  if (tweets.length === 0) {
    return (
      <div className="empty-state">
        <p>🐦 No hay tweets todavía</p>
        <p className="empty-subtitle">¡Sé el primero en publicar!</p>
      </div>
    )
  }

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet 
          key={tweet.id} 
          tweet={tweet} 
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TweetList