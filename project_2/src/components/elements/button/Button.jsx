import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Button({ btnType, children, className }) {
  return (
    <button type={btnType} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  btnType: 'button',
};
Button.propTypes = {
  btnType: PropTypes.string,
};

export default Button;
