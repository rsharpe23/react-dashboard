import React from 'react';

import Filters from '@/Filters';
import { DashboardPortfolioTypeFilter } from '@Dashboard/@Portfolio/Filter';
import { DashboardDateFilter } from '@Dashboard/Filter';
import { SearchFilter } from '@/Filter';

const DashboardPortfolioFilters = props => {
  return (
    <Filters
      {...props}
      render={onChange => (
        <>
          <DashboardPortfolioTypeFilter
            onChange={type => onChange({ type })}
          />

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

export default DashboardPortfolioFilters;