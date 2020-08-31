import { useRef, useCallback } from 'react';
import { getSerializableData } from 'src/utils';

export function useForm() {
  const ref = useRef();

  const getData = useCallback(() => {
    return getSerializableData(ref.current); 
  }, []);

  const validate = useCallback(() => {
    return ref.current.reportValidity();
  }, []);

  return [ref, getData, validate];
}