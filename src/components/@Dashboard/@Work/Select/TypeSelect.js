import React from 'react';

import { useWorkTypeApi } from 'src/hooks';
import { DataSelect } from '@/Select';

const DashboardWorkTypeSelect = ({ initialValue }) => {
  const api = useWorkTypeApi();

  return (
    <DataSelect
      api={api}
      initialValue={initialValue}
      name="type_id"
    />
  );
};

export default DashboardWorkTypeSelect;