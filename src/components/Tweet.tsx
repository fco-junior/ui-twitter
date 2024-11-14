import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';

interface TweetProps {
  icon?: string,
  name: string,
  user: string,
  content: string,
  likes: number,
  retweets: number,
  comments: number
}

export function Tweet(props: TweetProps) {
  return (
    <a href="#" className="tweet">
      <img src={props.icon ?? ""} alt={props.name} />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{props.name}</strong>
          <span>{props.user}</span>
        </div>

        {
          props.content.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))
        }

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {props.likes}
          </button>

          <button type="button">
            <ArrowsClockwise />
            {props.retweets}
          </button>

          <button type="button">
            <Heart />
            {props.comments}
          </button>
        </div>
      </div>
    </a>
  )
}