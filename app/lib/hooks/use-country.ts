import { useState, useEffect } from 'react';

export const useCountry = (): string => {
  const [country, setCountry] = useState<string>('Germany');

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await fetch('https://freeipapi.com/api/json', { cache: 'force-cache' });
      const data = await res.json();
      setCountry(data.countryName);
    };
    void fetchLocation();
  }, []);

  return country;
};
