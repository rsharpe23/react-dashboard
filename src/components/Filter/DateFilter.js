import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getDateTempl } from 'src/utils';
import Filter from './Filter';

const DateFilter = ({ entries, onChange }) => {
  const initialValue = 'Все даты';

  const data = useMemo(() => {
    return [initialValue, ...new Set(
      entries.map(entry => getDateTempl(entry.date))
    )];
  }, [entries]);

  const resultFn = useCallback(value => {
    return value !== initialValue
      && { value, filterType: 'date-compare' };
  }, []);

  return (
    <Filter
      data={data}
      resultFn={resultFn}
      onChange={onChange}
    />
  );
};

DateFilter.propTypes = {
  entries: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default DateFilter;