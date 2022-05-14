import React from 'react';
import Main from 'components/layouts/main/Main';
import Wall from 'components/elements/Wall/Wall';
import posts from 'data/posts';

import '../../../styles/index.scss';
import styles from './App.module.scss';

function App() {
  return (
    <Main>
      <div className={styles.appContent}>
        <div className={styles.appContentLeft}>
          <Wall posts={posts} />
        </div>
        <div className={styles.appContentRight} />
      </div>
    </Main>
  );
}

export default App;
