/* eslint-disable import/prefer-default-export */
import { useState, useEffect, useMemo } from 'react';

export function usePagination(data, entriesPerPage) {
  const startPage = 1;
  const entryCount = data.length;
  const [page, setPage] = useState(startPage);

  const chunk = useMemo(() => {
    const start = (page - 1) * entriesPerPage;
    const end = start + entriesPerPage;

    return { 
      value: data.slice(start, end),
      start: entryCount > 0 ? start + 1 : 0, 
      end: end > entryCount ? entryCount : end,
    };
  }, [page, entriesPerPage, data, entryCount]);

  const length = useMemo(() => {
    return Math.ceil(entryCount / entriesPerPage);
  }, [entryCount, entriesPerPage]);

  // XXX: Обязательно сбрасываем пагинацию при изменении кол-ва записей 
  // иначе будет баг (несоотвествие записей фильтрам и т.д.)
  useEffect(() => setPage(startPage), [entryCount]);

  return [chunk, length, page, setPage];
}