import { useEffect, useState } from 'react';
import { getMovieDetails, getTvShowDetails } from '../api/media';
import { MediaType } from '../enums';
import { MediumDetails } from '../types';

const useDetails = (id: number, type: MediaType) => {
  const [mediumDetails, setMediumDetails] = useState<MediumDetails>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (type) {
          case MediaType.Movie:
            setMediumDetails(await getMovieDetails(id));
            break;
          case MediaType.TvShow:
            setMediumDetails(await getTvShowDetails(id));
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };
    setIsLoading(true);
    fetchData().finally(() => setIsLoading(false));
  }, [type, id]);

  return { mediumDetails, isLoading, error };
};

export default useDetails;
