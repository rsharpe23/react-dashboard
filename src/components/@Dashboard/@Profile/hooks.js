import { useCallback } from 'react';

import { useProfileApi } from 'src/hooks';
import { useDashboardEntryBase } from '@Dashboard/Entry';

export function useDashboardProfile() {
  const api = useProfileApi();
  const [data, receiveData, saveData, isReady] = useDashboardEntryBase();

  const _receiveData = useCallback(() => {
    return receiveData(api.get());
  }, [api, receiveData]);

  const _saveData = useCallback(newData => {
    return saveData(api.update(newData));
  }, [api, saveData]);

  return [data, _receiveData, _saveData, isReady];
}