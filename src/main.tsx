import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  Hash,
  House,
  Sparkle,
  User
} from 'phosphor-react';

import './global.css';

import logoTwitter from './assets/logo-twitter.svg';
import { Tweet } from './components/Tweet';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={logoTwitter} alt="Logo" />

        <nav className="main-navigation">
          <a className='active' href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <EnvelopeSimple />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profiles
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/fco-junior.png" alt="Fco Costa Cassemiro Jr" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </StrictMode>,
)
