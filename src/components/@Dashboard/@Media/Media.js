/* eslint-disable no-void */
/* eslint-disable import/order */
import React, { useEffect, useState, useCallback } from 'react';

import { openFileDialog } from 'src/utils';
import { useDashboardMedia } from './hooks';
import { useFilter, FilterContext } from '@/Filter';

import Screen from '@/Screen';
import Button from '@/Button';
import Thumbnail from '@/Thumbnail';
import DashboardFilters from '@Dashboard/Filters';
import DashboardMediaModal from './Modal';

import './Media.scss';

const DashboardMedia = () => {
  const [data, receiveData, createOne, deleteOne] = useDashboardMedia();
  const [filteredData, setFilterState] = useFilter(data);
  const [value, setValue] = useState(null);

  const handleCreateBtnClick = e => {
    e.preventDefault();

    // TODO: Сделать мультизагрузку файлов
    openFileDialog(files => {
      const attachment = files[0];

      // FIXME: Сделать полноценную валидацию
      if (!~attachment.type.indexOf('image')) {
        throw new Error('Invalid mime-type of attachment');
      }

      createOne(attachment);
    });
  };

  const handleModalClose = () => setValue(null);

  // XXX: Функция useEffect должна всегда возвращать undefined
  useEffect(() => void receiveData(), [receiveData]);

  return (
    <>
      <Screen mix="Media">
        <h1 className="Screen-Title">
          <span>Медиафайлы</span>

          <Button onClick={handleCreateBtnClick}>
            Добавить новый
          </Button>
        </h1>

        <FilterContext.Provider value={data}>
          <DashboardFilters setFilterState={setFilterState} />
        </FilterContext.Provider>

        <hr />

        <div className="row">
          {filteredData.map(item => (
            <div key={item.id} className="col-md-2 mb-3">
              <Thumbnail
                src={item.src}
                alt={item.name}
                onClick={e => {
                  e.preventDefault();
                  setValue(item);
                }}
              />
            </div>
          ))}
        </div>
      </Screen>

      {value && (
        <DashboardMediaModal
          size="xl"
          title="Параметры файла"
          value={value}
          deleteOne={deleteOne}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default DashboardMedia;