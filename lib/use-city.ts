import { useState, useEffect } from 'react';

export const useCity = (): string => {
  const [city, setCity] = useState<string>('Tel Aviv');

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await fetch('http://ip-api.com/json');
      const data = await res.json();
      setCity(data.city);
    };
    fetchLocation();
  }, []);

  return city;
};
