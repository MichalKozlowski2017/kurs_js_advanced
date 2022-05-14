import React from 'react';

import Header from 'components/elements/Header/Header';

import styles from './styles.module.scss';

function Main({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}

export default Main;
