import React from 'react';

import Filters from '@/Filters';
import { DashboardDateFilter } from '@Dashboard/Filter';
import { SearchFilter } from '@/Filter';

const DashboardFilters = props => {
  return (
    <Filters 
      {...props} 
      render={onChange => (
        <>
          <DashboardDateFilter 
            onChange={date => onChange({ date })} 
          />

          <SearchFilter 
            onChange={name => onChange({ name })} 
          />
        </>
      )} 
    />
  );
};

export default DashboardFilters;