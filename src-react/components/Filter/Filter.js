import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Filter = props => {
  const options = props.options.map((option, index) => {
    return index === 0 ? (
      <React.Fragment key={index + 1}><option name="none">None</option><option name={option}>{option}</option></React.Fragment>
    ) : (
      <option key={index + 1} name={option}>{option}</option>
    )
  });
  
  return (
    <select value={props.filter} className="filter" onChange={(e) => props.onChange(e.target.value)}>
      {options}
    </select>
  );
};

Filter.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  filter: PropTypes.string
};

export default Filter;