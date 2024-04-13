import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = 'language=ko-KR'; // 언어설정 추가

const fetchMovieTrailer = ({ id }) => {
  return api.get(`/movie/${id}/videos?&${lang}`);
};

export const useMovieTrailerQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-trailer', id],
    queryFn: () => fetchMovieTrailer({ id }),
    select: (result) => result.data.results,
  });
};