import { useEffect, useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return { state, setState };
}

export default useLocalStorage;
