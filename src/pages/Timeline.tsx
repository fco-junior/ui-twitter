import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  };

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  };

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Jr" />
          <textarea onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            onKeyDown={handleHotkeySubmit}
            value={newTweet}
            id="tweet"
            placeholder="What's happening?"
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {
        tweets.map(tweet => {
          return (
            <Tweet key={tweet} content={tweet} />
          )
        })
      }
    </main>
  )
}