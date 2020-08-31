import { useState, useCallback } from 'react';

export function useDashboardEntries(api) {
  const [data, setData] = useState([]);

  const receiveData = useCallback(
    (applyData = x => x) => {
      return api.getAll()
        .then(result => {
          setData(applyData(result.data));
          return result;
        });
    }, 
    [api]
  );

  const deleteOne = useCallback(id => {
    return api.delete(id)
      .then(result => {
        setData(prevData => (
          prevData.filter(item => item.id !== id)
        ));

        return result;
      });
  }, [api]);

  return [data, receiveData, deleteOne];
}