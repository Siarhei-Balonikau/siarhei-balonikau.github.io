import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Textarea = props => {
  return (
    <textarea value={props.value} className="textarea" onChange={(e) => props.onChange(props.field, e.target.value)} ></textarea>
  );
};

Textarea.propTypes = {
  onChange: PropTypes.func,
  field: PropTypes.string,
  value: PropTypes.string
};

export default Textarea;