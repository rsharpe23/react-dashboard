/* eslint-disable no-void */
/* eslint-disable no-alert */
/* eslint-disable import/order */
import React, { useEffect } from 'react';

import { useDashboardProfile } from './hooks';
import { useForm } from '@/Form';

import Screen from '@/Screen';
import Button from '@/Button';
import DashboardProfileForm from './Form';

const DashboardProfile = () => {
  const [data, receiveData, saveData, isReady] = useDashboardProfile();
  const [formRef, getFormData, validateForm] = useForm();

  const _saveData = newData => {
    saveData(newData).then(
      () => alert('Profile was successfully saved'),
      error => alert(error.message)
    );
  };

  const handleSaveBtnClick = e => {
    e.preventDefault();

    if (!isReady) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    _saveData(getFormData());
  };

  useEffect(() => void receiveData(), [receiveData]);

  return (
    <Screen mix="Profile">
      <h1 className="Screen-Title">
        <span>Мой профиль</span>

        <Button onClick={handleSaveBtnClick}>
          Сохранить
        </Button>
      </h1>

      <DashboardProfileForm ref={formRef} initialData={data} />
    </Screen>
  );
};

export default DashboardProfile;