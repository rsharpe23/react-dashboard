/* eslint-disable import/order */
import React from 'react';

import { useDashboardWorkTypes } from './hooks';
import { useFilter, FilterContext } from '@/Filter';

import Button from '@/Button';
import DashboardEntries from '@Dashboard/Entries';
import DashboardTable from '@Dashboard/Table';
import DashboardFilters from '@Dashboard/Filters';

const DashboardWorkTypes = () => {
  const [data, receiveData, deleteOne] = useDashboardWorkTypes();
  const [filteredData, setFilterState] = useFilter(data);

  const cols = {
    id: '#',
    name: 'Название',
    date: 'Опубликовано',
  };

  return (
    <DashboardEntries
      mix="WorkTypes"
      receiveData={receiveData}
      deleteOne={deleteOne}
      render={onAction => (
        <>
          <h1 className="Screen-Title">
            <span>Типы работ</span>

            <Button onClick={e => {
              e.preventDefault();
              onAction({ action: 'create' });
            }}>
              Добавить новый
            </Button>
          </h1>

          <FilterContext.Provider value={data}>
            <DashboardFilters setFilterState={setFilterState} />
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

export default DashboardWorkTypes;