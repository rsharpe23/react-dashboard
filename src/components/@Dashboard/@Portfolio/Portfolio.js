/* eslint-disable import/order */
import React from 'react';

import { useDashboardPortfolio } from './hooks';
import { useFilter, FilterContext } from '@/Filter';

import Button from '@/Button';
import DashboardEntries from '@Dashboard/Entries';
import DashboardTable from '@Dashboard/Table';
import DashboardPortfolioFilters from './Filters';

const DashboardPortfolio = () => {
  const [data, receiveData, deleteOne] = useDashboardPortfolio();
  const [filteredData, setFilterState] = useFilter(data);

  const cols = {
    id: '#',
    name: 'Название',
    type: 'Тип',
    date: 'Опубликовано',
  };

  return (
    <DashboardEntries
      mix="Portfolio"
      receiveData={receiveData}
      deleteOne={deleteOne}
      render={onAction => (
        <>
          <h1 className="Screen-Title">
            <span>Все работы</span>

            <Button onClick={e => {
              e.preventDefault();
              onAction({ action: 'create' });
            }}>
              Добавить новую
            </Button>
          </h1>

          <FilterContext.Provider value={data}>
            <DashboardPortfolioFilters
              setFilterState={setFilterState}
            />
          </FilterContext.Provider>

          <DashboardTable
            cols={cols}
            data={filteredData}
            onAction={(action, item) => {
              onAction({ action, item });
            }}
          />
        </>
      )}
    />
  );
};

export default DashboardPortfolio;