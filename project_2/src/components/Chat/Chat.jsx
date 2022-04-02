import React from 'react';

import styles from './Chat.module.css';

function Chat({ messages }) {
  return (
    <div id="chatWindow" className={styles.chatWindow}>
      <div className={styles.chatInner}>
        {messages.map((message) => (
          <div className={`message ${styles.message}`} key={message.id}>
            <div className={styles.message__content}>
              <div className={styles.messageName}>{message.name}:</div>
              <div className={styles.messageMessage}>{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
