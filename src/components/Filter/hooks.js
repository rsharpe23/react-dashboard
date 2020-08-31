import { useState, useMemo, useCallback } from 'react';
import { getDateTempl } from 'src/utils';

// TODO: Сделать search-предикат регистронезависимым
export function useFilter(data) {
  const [state, setState] = useState({});

  const predicates = useMemo(() => ({
    compare: (k, v, item) => item[k] === v,
    'date-compare': (k, v, item) => getDateTempl(item[k]) === v,
    search: (k, v, item) => ~item[k].indexOf(v),
  }), []);

  const result = useMemo(() => {
    return Object.entries(state)
      .reduce((total, [k, v]) => {
        if (!v) {
          return total;
        }

        const _v = typeof v === 'object'
          ? v : { value: v, filterType: 'compare' };

        return total.filter(
          predicates[_v.filterType].bind(null, k, _v.value)
        );
      }, data);
    // ============
  }, [data, predicates, state]);

  return [result, setState];
}