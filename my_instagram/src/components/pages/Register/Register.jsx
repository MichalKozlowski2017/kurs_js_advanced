import React, { useState } from 'react';

import InputGroup from 'components/elements/InputGroup/InputGroup';

import styles from './Register.module.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNick = (e) => {
    setNick(e.target.value);
  };

  return (
    <section className={styles.register}>
      <div className={styles.registerWrapper}>
        <div className={styles.logo}>Logo</div>
        <p>Zarejestruj się, aby przeglądać zdjęcia i filmy znajomych.</p>

        <form action="">
          <InputGroup
            id="inputEmail"
            type="text"
            placeholder="Numer telefonu komórkowego lub adres e-mail"
            onChange={handleEmail}
            inputValue={email}
          />

          <InputGroup
            id="inputName"
            type="text"
            placeholder="Imię i nazwisko"
            onChange={handleName}
            inputValue={name}
          />

          <InputGroup
            id="inputNick"
            type="text"
            placeholder="Nazwa użytkownika"
            onChange={handleNick}
            inputValue={nick}
          />

          <InputGroup
            id="inputPassword"
            type="text"
            placeholder="Hasło"
            onChange={handlePassword}
            inputValue={password}
          />
          <button type="submit">Zarejestruj się</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
