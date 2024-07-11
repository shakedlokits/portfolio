import { useState, useEffect } from 'react';

export const useWttr = (): string => {
  const [weather, setWeather] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch('https://wttr.in?format=%f+%c', { cache: 'force-cache' });
      const data = await res.text();
      setWeather(data);
    };
    void fetchWeather();
  }, []);

  return weather;
};
