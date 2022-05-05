import Main from 'components/layouts/main/Main';
import React, { useState } from 'react';

import InputGroup from 'components/elements/inputGroup/InputGroup';
import Button from 'components/elements/button/Button';

import { update } from 'services/firebase';
import styles from './styles.module.css';

function MyProfile() {
  const [name, setName] = useState('');

  const handleProfile = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      document.querySelector('#inputMyProfile').classList.add('invalid');
    } else {
      update('currentUser', {
        name,
      });
      document.querySelector('#inputMyProfile').classList.remove('invalid');
    }
  };
  return (
    <Main>
      <form className={styles.myProfileForm} onSubmit={handleSubmit}>
        <InputGroup
          id="inputMyProfile"
          type="text"
          label="Name"
          onChange={handleProfile}
          inputValue={name}
        />

        <Button btnType="submit">Zapisz</Button>
      </form>
    </Main>
  );
}

export default MyProfile;
