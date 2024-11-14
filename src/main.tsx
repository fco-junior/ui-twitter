import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';

import { Sidebar } from './components/Sidebar';
import { Tweet } from './components/Tweet';
import { Header } from './components/Header';
import { Separator } from './components/Separator';

import tweets from './data/tweetsMock';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Jr" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {
            tweets.map(tweet => {
              return (
                <Tweet
                  key={tweet.user}
                  icon={tweet.icon}
                  name={tweet.name}
                  user={tweet.user}
                  content={tweet.content}
                  likes={tweet.likes}
                  retweets={tweet.retweets}
                  comments={tweet.comments}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  </StrictMode>,
)
