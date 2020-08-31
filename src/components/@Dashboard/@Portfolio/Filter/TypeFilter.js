import React, { useEffect, useCallback, useState } from 'react';

import { useWorkTypeApi } from 'src/hooks';
import Filter from '@/Filter';

const DashboardPortfolioTypeFilter = props => {
  const api = useWorkTypeApi();

  const initialValue = 'Все типы';
  const [data, setData] = useState([initialValue]);

  const resultFn = useCallback(value => {
    return value !== initialValue && value;
  }, []);

  const receiveData = useCallback(() => {
    api.getAll().then(result => {
      const newData = result.data.map(item => item.name);
      newData.unshift(initialValue);
      setData(newData);
    });
  }, [api]);

  useEffect(() => receiveData(), [receiveData]);

  return (
    <Filter
      {...props}
      data={data}
      resultFn={resultFn}
    />
  );
};

export default DashboardPortfolioTypeFilter;