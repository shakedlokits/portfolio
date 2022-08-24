import { useState, useEffect } from 'react';

export const useCountry = (): string => {
  const [country, setCountry] = useState<string>('Israel');

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await fetch('https://api.myip.com');
      const data = await res.json();
      setCountry(data.country);
    };
    fetchLocation();
  }, []);

  return country;
};
