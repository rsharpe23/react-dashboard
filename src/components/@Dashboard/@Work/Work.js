/* eslint-disable import/order */
import React from 'react';
import { useParams } from 'react-router-dom';

import { useDashboardWork } from './hooks';
import { useForm } from '@/Form';

import Button from '@/Button';
import DashboardEntry from '@Dashboard/Entry';
import DashboardWorkForm from './Form';

const DashboardWork = () => {
  const { id, viewType } = useParams();
  const [data, receiveData, saveData, isReady] = useDashboardWork(id);

  const title = viewType === 'create'
    ? 'Добавить работу' : viewType === 'edit'
      ? 'Изменить работу' : '';

  const [formRef, getFormData, validateForm] = useForm();

  return (
    <DashboardEntry
      mix="Work"
      viewType={viewType}
      receiveData={receiveData}
      saveData={saveData}
      returnPath="/dashboard/portfolio"
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
              Все работы
            </Button>
          </h1>

          <DashboardWorkForm ref={formRef} initialData={data} />
        </>
      )}
    />
  );
};

export default DashboardWork;