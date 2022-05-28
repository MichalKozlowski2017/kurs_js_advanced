import React, { useState, useEffect, useContext } from 'react';
import Main from 'components/layouts/main/Main';
import { updateProfile } from 'firebase/auth';
import { auth } from 'services/firebase';
import { MainContext } from 'contexts/main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import styles from './style.module.css';

function MyProfile() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(
    'https://www.neptumar.pl/wp-content/uploads/facebook-profile-picture-no-pic-avatar.jpg'
  );

  const { currentUser } = useContext(MainContext);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.displayName);
      if (currentUser.photoURL) {
        setAvatar(currentUser.photoURL);
      } else {
        setAvatar(
          'https://www.neptumar.pl/wp-content/uploads/facebook-profile-picture-no-pic-avatar.jpg'
        );
      }
    }
  }, [currentUser]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: avatar,
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <RestrictedRoute>
      <Main>
        <form className="form" onSubmit={handleSubmit}>
          <InputGroup
            id="userEmail"
            type="text"
            label="email"
            handleChange={() => {}}
            inputValue={currentUser?.email}
          />

          <InputGroup
            id="userName"
            type="text"
            label="Display Name"
            handleChange={handleName}
            inputValue={name}
          />

          <img src={avatar} alt="avatar" className={styles.avatar} />

          <InputGroup
            id="userAvatar"
            type="text"
            label="Avatar"
            handleChange={handleAvatar}
            inputValue={avatar}
          />

          <Button btnType="submit">Update Profile</Button>
        </form>
      </Main>
    </RestrictedRoute>
  );
}

export default MyProfile;
