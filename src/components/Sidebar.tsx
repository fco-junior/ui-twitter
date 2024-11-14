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

import './Sidebar.css';

import logoTwitter from '../assets/logo-twitter.svg';

export function Sidebar() {
  return (
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
  )
}