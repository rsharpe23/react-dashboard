/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useRedirect } from 'src/hooks';
import Screen from '@/Screen';

const DashboardEntry = ({ 
  viewType,
  receiveData, 
  saveData, 
  returnPath, 
  render, 
  ...rest 
}) => {
  const viewTypes = ['create', 'edit'];
  const isAvailable = ~viewTypes.indexOf(viewType);

  const _saveData = requestFn => {
    saveData(requestFn).then(
      () => alert('The data was successfully saved'),
      error => alert(error.message)
    );
  };

  const onSave = newData => {
    if (viewType === 'create') {
      _saveData(api => api.create(newData));
    } else if (viewType === 'edit') {
      _saveData((api, id) => api.update(id, newData));
    }
  };

  const redirect = useRedirect(returnPath);
  const onCancel = () => redirect();

  useEffect(() => {
    viewType === 'edit' && receiveData();
  }, [receiveData, viewType]);

  return isAvailable ? (
    <Screen {...rest}>
      {render(onSave, onCancel)}
    </Screen>
  ) : (
    <Redirect to={returnPath} />
  );
};

DashboardEntry.propTypes = {
  viewType: PropTypes.string,
  receiveData: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  returnPath: PropTypes.string,
  render: PropTypes.func.isRequired,
};

export default DashboardEntry;