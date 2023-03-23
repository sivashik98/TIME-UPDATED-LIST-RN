import { useEffect } from 'react';

export const useInterval = (cb, time) => {
  useEffect(() => {
    if (time) {
      const intervalId = setInterval(cb, time);

      return () => clearInterval(intervalId);
    }
  }, [time]);
};
