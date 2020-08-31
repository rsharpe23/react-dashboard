import { useCallback } from 'react';

import { useWorkApi } from 'src/hooks';
import { useDashboardEntries } from '@Dashboard/Entries';

export function useDashboardPortfolio() {
  const api = useWorkApi();
  const [data, receiveData, deleteOne] = useDashboardEntries(api);

  const _receiveData = useCallback(() => {
    const mapFn = item => ({
      id: item.id,
      name: item.title,
      type: item.type && item.type.name,
      date: item.created_at,
    });

    return receiveData(x => x.map(mapFn));
  }, [receiveData]);

  return [data, _receiveData, deleteOne];
}