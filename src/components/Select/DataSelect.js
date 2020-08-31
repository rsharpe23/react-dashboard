import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDepState } from 'src/hooks';
import Select from './Select';

// Здесь не получится сделать неконтролируемый ввод, 
// т.к. свойство data получает необходимое значение через некоторое время.
// Следует помнить что контролируемый input не должен 
// принимать значения undefined/null
const DataSelect = ({ api, initialValue, ...rest }) => {
  // initialValue может быть null, и в этом случае параметр по умолчанию
  // не сработает, т.к. он применяется только при значении undefined
  const _initialValue = initialValue || '';

  const [data, setData] = useState({});
  const [value, setValue] = useDepState(_initialValue);

  const handleChange = useCallback(e => {
    e.preventDefault();
    setValue(e.target.value);
  }, [setValue]);

  const receiveData = useCallback(() => {
    api.getAll().then(result => {
      const newData = result.data
        .reduce((total, { id, name }) => ({
          ...total, [id]: name,
        }), {});

      setData(newData);
    });
  }, [api]);

  useEffect(() => receiveData(), [receiveData]);

  return (
    <Select 
      {...rest} 
      data={data} 
      value={value} 
      onChange={handleChange} 
    />
  );
};

DataSelect.propTypes = {
  api: PropTypes.object.isRequired,
};

export default DataSelect;