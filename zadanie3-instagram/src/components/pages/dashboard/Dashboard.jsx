import React, { useEffect, useState, useContext } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import { get, save, update } from 'services/firebase';
import { MainContext } from 'contexts/main';
// import { toast } from 'react-toastify';

import styles from './style.module.css';
// import { updateCurrentUser } from 'firebase/auth';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(MainContext);

  useEffect(() => {
    get('posts').then((data) => {
      if (data) {
        setPosts(Object.values(data ?? {}));
      }
    });
  }, []);

  const handleLike = (post) => {
    const wasLiked = post.likes?.find(
      (like) => like.email === currentUser.email
    );

    if (wasLiked) {
      return;
    }

    const newLikes = post.likes
      ? post.likes.concat({ email: currentUser.email })
      : [{ email: currentUser.email }];

    update(`posts/${post.id}`, {
      ...post,
      likes: newLikes,
    }).then(() => {
      const copiedPostArray = [...posts];
      const selectedPostIndex = posts.findIndex(
        (frontPost) => frontPost.id === post.id
      );

      save('notifications', {
        value: 'Ktos polajkowal Twoj post',
        reciepient: post.author.name,
      });

      copiedPostArray[selectedPostIndex].likes = newLikes;
      setPosts(copiedPostArray);
    });
  };

  return (
    <RestrictedRoute>
      <Main>
        <ul className={styles.wrapper}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <div className={styles.author}>
                <img src={post.author?.avatar} alt={post.author?.name} />
                <div>{post.author?.name}</div>
              </div>
              <img
                className={styles.image}
                src={post.image}
                alt={post.author?.name}
              />
              <div className={styles.info}>
                <button
                  onClick={() => handleLike(post)}
                  className={styles.likes}
                  disabled={post.likes?.find(
                    (like) => like.email === currentUser.email
                  )}
                >
                  <img
                    src="https://www.pinclipart.com/picdir/big/143-1439670_heart-like-icon-black-heart-icon-png-clipart.png"
                    alt="Like"
                  />
                  <b>Like</b>
                  <span>
                    ({post.likes?.length ? post.likes?.length : 0} Likes)
                  </span>
                </button>
                <h4>{post?.title}</h4>
                <p>{post?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
