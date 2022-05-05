import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">Chat App</Link>
        <nav>
          <ul>
            <li>
              <Link to="/me">My Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>

      <footer className={styles.footer}>Hello footer</footer>
    </div>
  );
}

export default Main;
