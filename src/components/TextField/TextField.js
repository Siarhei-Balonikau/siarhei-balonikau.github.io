import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const TextField = props => {
  return (
    <input value={props.value} className="text-field" type="text" onChange={(e) => props.onChange(props.field, e.target.value)} />
  );
};

TextField.propTypes = {
  onChange: PropTypes.func,
  field: PropTypes.string,
  value: PropTypes.string
};

export default TextField;