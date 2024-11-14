import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Junior" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Fco Costa Cassemiro Junior</strong>
          <span>@cassemirojr</span>
        </div>

        <p> {props.content} </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {20}
          </button>

          <button type="button">
            <ArrowsClockwise />
            {10}
          </button>

          <button type="button">
            <Heart />
            {5}
          </button>
        </div>
      </div>
    </Link>
  )
}