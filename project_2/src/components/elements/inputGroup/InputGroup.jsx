import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function InputGroup({ id, type, label, onChange, inputValue }) {
  return (
    <label className={styles.label} htmlFor={id}>
      {label}
      <input
        type={type}
        name={label}
        id={id}
        label={label}
        placeholder={label}
        onChange={onChange}
        value={inputValue}
        className={styles.input}
      />
    </label>
  );
}

InputGroup.defaultProps = {
  type: 'type',
  id: 'id',
  label: 'label',
  onChange: 'onChange',
  inputValue: null,
};
InputGroup.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};
export default InputGroup;
