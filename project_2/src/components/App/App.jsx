import React, { useState, useEffect } from 'react';

import Chat from '../Chat/Chat';
import styles from './App.module.css';

function App() {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('messages')) ?? []
  );
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const generateKey = (pre) => `${pre}_${new Date().getTime()}`;
  const setScroll = () => {
    document.querySelector('#chatWindow').scrollTop =
      document.querySelector('#chatWindow').scrollHeight;
  };

  useEffect(() => {
    if (storage) {
      setMessages(storage);
      setScroll();
    }
  }, []);
  useEffect(() => {
    setStorage(localStorage.setItem('messages', JSON.stringify([...messages])));
    setScroll();
  }, [messages]);

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };
  const handleMessageValue = (e) => {
    setMessageValue(e.target.value);
  };
  const handleClear = () => {
    setMessages([]);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (nameValue.length <= 1 || messageValue.length <= 1) {
      if (nameValue.length <= 1) {
        document.querySelector('#inputNick').classList.add('invalid');
      }
      if (messageValue.length <= 1) {
        document.querySelector('#inputMessage').classList.add('invalid');
      }
    } else {
      document.querySelector('#inputNick').classList.remove('invalid');
      document.querySelector('#inputMessage').classList.remove('invalid');
      setMessages([
        ...messages,
        {
          name: nameValue,
          message: messageValue,
          id: generateKey('id'),
        },
      ]);
      setStorage(
        localStorage.setItem(
          'messages',
          JSON.stringify([
            ...messages,
            {
              name: nameValue,
              message: messageValue,
            },
          ])
        )
      );
      setMessageValue('');
    }
  };
  return (
    <div id="appWrapper" className={styles.appWrapper}>
      <div className={styles.chat}>
        <Chat messages={messages} />
        <form className={styles.chat__form} onSubmit={handleSend}>
          <input
            type="text"
            name="nick"
            id="inputNick"
            label="Nick"
            onChange={handleNameValue}
            placeholder="Name"
          />
          <textarea
            id="inputMessage"
            label="Message"
            onChange={handleMessageValue}
            placeholder="Message"
            value={messageValue}
          />
          <button type="submit">Send Message</button>
        </form>

        <button
          type="button"
          className={styles.clearChat}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
