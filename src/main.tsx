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
  User
} from 'phosphor-react';

import './global.css';

import logoTwitter from './assets/logo-twitter.svg';

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
        content
      </div>
    </div>
  </StrictMode>,
)
