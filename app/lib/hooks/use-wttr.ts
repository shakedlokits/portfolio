import { useState, useEffect } from 'react';

export const useWttr = (): string => {
  const [weather, setWeather] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch('https://wttr.in?format=%f+%c');
      const data = await res.text();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return weather;
};
