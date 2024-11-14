import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet";

import { tweets, answers } from '../data/tweetsMock';
import './Status.css';


export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        icon={tweets[0].icon}
        name={tweets[0].name}
        user={tweets[0].user}
        content={tweets[0].content}
        likes={tweets[0].likes}
        retweets={tweets[0].retweets}
        comments={tweets[0].comments}
      />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Jr" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {
        answers.map(answer => {
          return (
            <Tweet
              key={answer.user}
              icon={answer.icon}
              name={answer.name}
              user={answer.user}
              content={answer.content}
              likes={answer.likes}
              retweets={answer.retweets}
              comments={answer.comments}
            />
          )
        })
      }
    </main>
  )
}