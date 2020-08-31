import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ data, ...rest }) => {
  const items = Object.entries(data);

  return (
    <select {...rest} className="custom-select Select">
      {items.map(([k, v]) => (
        <option key={k} value={k}>{v}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Select;