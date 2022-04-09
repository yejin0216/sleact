import { useState, useCallback, Dispatch, SetStateAction } from 'react';

const useInput = <T = unknown>(initialData: T): [T, (e: unknown) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialData);
  const handler = useCallback(
    (e) => {
      const { value } = e.target;
      setValue(value);
    },
    [value],
  );
  return [value, handler, setValue];
};

export default useInput;
