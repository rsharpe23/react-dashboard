import React, { useContext } from 'react';
import { FilterContext, DateFilter } from '@/Filter';

const DashboardDateFilter = props => {
  const entries = useContext(FilterContext);

  return (
    <DateFilter 
      {...props} 
      entries={entries} 
    />
  );
};

export default DashboardDateFilter;