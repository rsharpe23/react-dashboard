import { useCallback } from 'react';

import { useWorkTypeApi } from 'src/hooks';
import { useDashboardEntries } from '@Dashboard/Entries';

export function useDashboardWorkTypes() {
  const api = useWorkTypeApi();
  const [data, receiveData, deleteOne] = useDashboardEntries(api);

  const _receiveData = useCallback(() => {
    const mapFn = item => ({
      id: item.id,
      name: item.name,
      date: item.created_at,
    });

    return receiveData(x => x.map(mapFn));
  }, [receiveData]);

  return [data, _receiveData, deleteOne];
}