import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputGroup.module.css';

function InputGroup({ id, type, onChange, inputValue, placeholder }) {
  return (
    <input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={inputValue}
      className={styles.input}
    />
  );
}

InputGroup.defaultProps = {
  type: 'type',
  id: 'id',
  placeholder: 'label',
  onChange: 'onChange',
  inputValue: null,
};
InputGroup.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};
export default InputGroup;
