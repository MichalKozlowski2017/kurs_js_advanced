import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard/PostCard';

import styles from './Wall.module.scss';

function Wall({ posts }) {
  return (
    <div className={styles.wall}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          profile={post.profile}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          content={post.content}
        />
      ))}
    </div>
  );
}
Wall.defaultProps = {
  posts: [],
};
Wall.propTypes = {
  posts: PropTypes.instanceOf(Array),
};

export default Wall;
