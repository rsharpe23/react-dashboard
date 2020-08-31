/* eslint-disable import/order */
import React from 'react';
import { useParams } from 'react-router-dom';

import { useDashboardWorkType } from './hooks';
import { useForm } from '@/Form';

import Button from '@/Button';
import DashboardEntry from '@Dashboard/Entry';
import DashboardWorkTypeForm from './Form';

const DashboardWorkType = () => {
  const { id, viewType } = useParams();
  const [data, receiveData, saveData, isReady] = useDashboardWorkType(id);

  const title = viewType === 'create'
    ? 'Добавить тип' : viewType === 'edit'
      ? 'Изменить тип' : '';

  const [formRef, getFormData, validateForm] = useForm();

  return (
    <DashboardEntry
      mix="WorkType"
      viewType={viewType}
      receiveData={receiveData}
      saveData={saveData}
      returnPath="/dashboard/work-types"
      render={(onSave, onCancel) => (
        <>
          <h1 className="Screen-Title">
            <span>{title}</span>

            <Button onClick={e => {
              e.preventDefault();

              if (!isReady) {
                return;
              }

              if (!validateForm()) {
                return;
              }

              onSave(getFormData());
            }}>
              Сохранить
            </Button>

            <Button outlined onClick={e => {
              e.preventDefault();
              onCancel();
            }}>
              Типы работ
            </Button>
          </h1>

          <DashboardWorkTypeForm ref={formRef} initialData={data} />
        </>
      )}
    />
  );
};

export default DashboardWorkType;