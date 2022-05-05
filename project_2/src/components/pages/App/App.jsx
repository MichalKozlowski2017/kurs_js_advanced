import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import { observe, save, get } from 'services/firebase';
import Chat from '../../elements/Chat/Chat';
import Main from '../../layouts/main/Main';
import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const generateKey = () => `${new Date().getTime()}`;
  const setScroll = () => {
    document.querySelector('#chatWindow').scrollTop =
      document.querySelector('#chatWindow').scrollHeight;
  };

  useEffect(() => {
    observe('messages/', setMessages);

    get('currentUser').then((user) => {
      if (user && user.name) {
        setNameValue(user.name);
      }
    });
  }, []);

  useEffect(() => {
    setScroll();
  }, [messages]);

  const handleMessageValue = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (nameValue.length <= 1 || messageValue.length <= 1) {
      if (messageValue.length <= 1) {
        document.querySelector('#inputMessage').classList.add('invalid');
      }
    } else {
      document.querySelector('#inputMessage').classList.remove('invalid');
      setMessageValue('');
      const newMessageId = generateKey();

      setMessages([
        ...messages,

        {
          person: nameValue,
          message: messageValue,
          id: newMessageId,
        },
      ]);

      save('messages/', {
        person: nameValue,
        message: messageValue,
      });
    }
  };
  return (
    <Main>
      <div id="appWrapper" className={styles.appWrapper}>
        <div className={styles.chat}>
          <Chat messages={messages} />
          <form className={styles.chat__form} onSubmit={handleSend}>
            {/* <InputGroup
              id="inputNick"
              type="text"
              label="Name"
              onChange={handleNameValue}
              inputValue={nameValue}
            /> */}
            <InputGroup
              id="inputMessage"
              type="text"
              label="Message"
              onChange={handleMessageValue}
              inputValue={messageValue}
            />

            <Button btnType="submit" text="Send">
              Send
            </Button>
          </form>
        </div>
      </div>
    </Main>
  );
}

export default App;
