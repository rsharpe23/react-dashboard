import { useCallback } from 'react';

import { useAttachmentApi } from 'src/hooks';
import { useDashboardEntries } from '@Dashboard/Entries';

export function useDashboardMedia() {
  const api = useAttachmentApi();
  const [data, receiveData, deleteOne] = useDashboardEntries(api);

  const _receiveData = useCallback(() => {
    const mapFn = item => ({
      id: item.id,
      src: item.src,
      name: item.name,
      mimeType: item.mime_type,
      size: item.size,
      date: item.created_at,
    });

    return receiveData(x => x.map(mapFn));
  }, [receiveData]);

  const createOne = useCallback(attachment => {
    const formData = new FormData();
    formData.append('attachment', attachment);

    return api.create(formData)
      .then(result => {
        _receiveData();
        return result;
      });
  }, [_receiveData, api]);

  return [data, _receiveData, createOne, deleteOne];
}