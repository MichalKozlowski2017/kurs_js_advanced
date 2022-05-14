import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostCard.module.scss';

function PostCard({ profile, avatar, likes, image, content }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.profileWrapper}>
          <div className={styles.avatar}>
            <img src={avatar} alt={profile} />
          </div>
          <div className={styles.profileName}>{profile}</div>
        </div>
      </div>
      <img className={styles.profileImage} src={image} alt={profile} />
      <div className={styles.contentWrapper}>
        <div className={styles.contentHeader}>{/* icons */}</div>
        <div className={styles.content}>
          <div className={styles.likes}>Liczba polubień: {likes}</div>
          {content}
        </div>
      </div>
    </article>
  );
}
PostCard.defaultProps = {
  profile: '',
  avatar: '',
  likes: 0,
  image: '',
  content: '',
};
PostCard.propTypes = {
  profile: PropTypes.string,
  avatar: PropTypes.string,
  likes: PropTypes.number,
  image: PropTypes.string,
  content: PropTypes.string,
};

export default PostCard;
