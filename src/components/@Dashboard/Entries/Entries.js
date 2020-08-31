/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-void */
import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useRedirect } from 'src/hooks';
import Screen from '@/Screen';

const DashboardEntries = ({ receiveData, deleteOne, render, ...rest }) => {
  const { path } = useRouteMatch();
  const redirect = useRedirect(path);

  const onAction = opts => {
    switch (opts.action) {
      case 'create':
        redirect('/create');
        break;

      case 'edit':
        redirect(`/${opts.item.id}/edit`);
        break;

      case 'delete':
        if (confirm('Do you want to delete this entry?')) {
          deleteOne(opts.item.id);
        }
        break;
    }
  };

  // XXX: Функция useEffect должна всегда возвращать undefined
  useEffect(() => void receiveData(), [receiveData]);
 
  return (
    <Screen {...rest}>
      {render(onAction)}
    </Screen>
  );
};

DashboardEntries.propTypes = {
  receiveData: PropTypes.func.isRequired,
  deleteOne: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default DashboardEntries;