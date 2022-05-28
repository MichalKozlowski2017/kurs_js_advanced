import React, { useState, useContext } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';
import { useNavigate } from 'react-router-dom';
import { MainContext } from 'contexts/main';

import { addFileToStorage, save } from 'services/firebase';

function AddPost() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isError, setIsError] = useState(false);
  const [file, setFile] = useState('');

  const navigate = useNavigate();

  const { currentUser } = useContext(MainContext);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && desc.length > 0) {
      setIsError(false);

      addFileToStorage(file).then((url) => {
        const newPost = {
          title,
          description: desc,
          image: url,
          author: {
            name: currentUser.displayName,
            avatar: currentUser.photoURL,
          },
        };

        save('posts', newPost);
      });

      navigate('/dashboard');
    } else {
      setIsError(true);
    }
  };
  return (
    <RestrictedRoute>
      <Main>
        <form action="" className="form" onSubmit={handleSubmit}>
          <h2>Add Post</h2>
          <InputGroup
            id="inputTitle"
            type="text"
            label="Title"
            handleChange={handleTitle}
            inputValue={title}
          />
          <InputGroup
            id="inputDesc"
            type="text"
            label="Description"
            handleChange={handleDesc}
            inputValue={desc}
          />
          <InputGroup
            id="file"
            type="file"
            label="File"
            handleChange={handleFileChange}
          />

          {isError ? <p>Pola nie mogąbyć puste</p> : ''}

          <Button btnType="submit">Add Post</Button>
        </form>
      </Main>
    </RestrictedRoute>
  );
}

export default AddPost;
