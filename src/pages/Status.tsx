import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet";

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    'Concordo!',
    'Faz muito sentido',
    'Parabéns'
  ]);

  function createNewAnswer(event:FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
    }
  };

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia autem libero, veritatis mollitia qui nisi eveniet cumque rerum atque, unde nobis, consectetur illo assumenda. Amet totam consequuntur repudiandae cum?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Jr" />
          <textarea onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            onKeyDown={handleHotkeySubmit}
            value={newAnswer}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }
    </main>
  )
}