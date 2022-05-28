import React, { useState } from 'react';
import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';
import { useNavigate } from 'react-router-dom';

import { signInUser } from 'services/firebase';
import { PublicRoute } from 'utils/AuthorizationRoutes';
// import styles from './style.module.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length <= 0 && password.length <= 5) {
      console.log('error');
    } else {
      signInUser(email, password)
        .then(() => {
          navigate('/dashboard');
        })
        .catch((error) => {
          setApiError(error.message);
        });
    }
  };

  return (
    <PublicRoute>
      <Main>
        <form className="form" action="" onSubmit={handleSubmit}>
          <InputGroup
            id="inputEmail"
            type="text"
            label="email"
            handleChange={handleEmail}
            inputValue={email}
          />

          <InputGroup
            id="inputPassword"
            type="password"
            label="Password"
            handleChange={handlePassword}
            inputValue={password}
          />
          <Button btnType="submit">Sign In</Button>

          {apiError ? <p>{apiError}</p> : ''}
        </form>
      </Main>
    </PublicRoute>
  );
}

export default Register;
