import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Button = props => {
  return (
    <button className="button">
      <span className="button__inner">
        {props.name}
      </span>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string
};

export default Button;