import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Search from '@/Search';

const SearchFilter = ({ onChange }) => {
  const resultFn = useCallback(value => {
    return !!value && { value, filterType: 'search' };
  }, []);

  const handleChange = useCallback(e => {
    e.preventDefault();

    if (!onChange) {
      return;
    }

    const { value } = e.target;
    const result = resultFn(value);

    onChange(result);
    // ========
  }, [onChange, resultFn]);

  return <Search onChange={handleChange} />;
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};

export default SearchFilter;