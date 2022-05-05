import React from 'react';

import styles from './styles.module.scss';

function Main({ children }) {
  return (
    <>
      <header className="header">Hello header</header>
      <div className={styles.main}>{children}</div>
      <footer className="footer">Hello Footer</footer>
    </>
  );
}

export default Main;
