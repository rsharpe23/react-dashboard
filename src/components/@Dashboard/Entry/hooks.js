import { useState, useCallback } from 'react';
import { useRequest } from 'src/hooks';

export function useDashboardEntryBase() {
  const [data, setData] = useState({});

  const [receiveDataRequest, canReceiveData] = useRequest();
  const [saveDataRequest, canSaveData] = useRequest();
  const isReady = canReceiveData && canSaveData;

  const receiveData = useCallback(request => {
    return receiveDataRequest.bind(request)
      .then(result => setData(result.data));
    // ========
  }, [receiveDataRequest]);

  const saveData = useCallback(request => {
    return saveDataRequest.bind(request);
  }, [saveDataRequest]);

  return [data, receiveData, saveData, isReady];
}

export function useDashboardEntry(api, id) {
  const [data, receiveData, saveData, isReady] = useDashboardEntryBase();

  const _receiveData = useCallback(() => {
    return receiveData(api.get(id));
  }, [api, id, receiveData]);

  const _saveData = useCallback(requestFn => {
    return saveData(requestFn(api, id));
  }, [api, id, saveData]);

  return [data, _receiveData, _saveData, isReady];
}