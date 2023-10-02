import { useEffect, useState } from 'react';

import { apiRequest } from '../services/api';

export const useFetchCharacters = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      try {
        const data = await apiRequest('/people/?format=json');
        console.log(data.results);
        setStarWarsCharacters(data.results);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { errorMessage, isLoading, starWarsCharacters };
};
