import React from 'react';

import styles from './Chat.module.css';

function Chat({ messages }) {
  return (
    <div id="chatWindow" className={styles.chatWindow}>
      <ul className={styles.chatInner}>
        {messages.map((message) => (
          <li className={`message ${styles.message}`} key={message.id}>
            <div className={styles.message__content}>
              <div className={styles.messageName}>{message.person}:</div>
              <div className={styles.messageMessage}>{message.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
