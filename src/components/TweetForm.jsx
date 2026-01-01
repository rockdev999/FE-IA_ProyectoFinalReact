import { useState } from 'react'
import './TweetForm.css'

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState('')
  const MAX_CHARS = 280

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    
    onAddTweet(text)
    setText('')
  }

  const charsLeft = MAX_CHARS - text.length

  return (
    <div className="tweet-form-container">
      <form onSubmit={handleSubmit} className="tweet-form">
        <div className="form-header">
          <div className="avatar">👤</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="¿Qué estás pensando?"
            maxLength={MAX_CHARS}
            rows="3"
          />
        </div>
        
        <div className="form-footer">
          <div className="char-counter">
            <span className={charsLeft < 20 ? 'warning' : ''}>
              {charsLeft}
            </span>
          </div>
          <button 
            type="submit" 
            className="btn-tweet"
            disabled={!text.trim() || text.length > MAX_CHARS}
          >
            Twittear
          </button>
        </div>
      </form>
    </div>
  )
}

export default TweetForm