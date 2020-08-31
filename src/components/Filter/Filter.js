import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from '@/Select';

// FIXME: Заменить resultFn на applyValue
const Filter = ({ data, resultFn, onChange, ...rest }) => {
  const handleChange = useCallback(e => {
    e.preventDefault();

    if (!onChange) {
      return;
    }

    const value = data[e.target.value];
    const result = resultFn(value);
    
    onChange(result);
    // ========
  }, [data, onChange, resultFn]);

  return (
    <div className="Filter">
      <Select 
        {...rest} 
        data={data} 
        onChange={handleChange} 
      />
    </div>
  );
};

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  resultFn: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default Filter;