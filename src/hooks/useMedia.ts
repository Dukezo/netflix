import { useEffect, useState } from 'react';
import { getMovies, getTrending, getTvShows } from '../api/media';
import { Genre, MediaType } from '../enums';
import { Medium } from '../types';

const useMedia = (type?: MediaType, genre?: Genre) => {
  const [media, setMedia] = useState<Medium[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === undefined) return setMedia(await getTrending());

        switch (type) {
          case MediaType.Movie:
            setMedia(await getMovies(genre));
            break;
          case MediaType.TvShow:
            setMedia(await getTvShows(genre));
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };
    setIsLoading(true);
    fetchData().finally(() => setIsLoading(false));
  }, [type, genre]);

  return { media, isLoading, error };
};

export default useMedia;
