import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = 'language=ko-KR'; // 언어설정 추가

const fetchMovieDetailCasts = ({ id }) => {
  return api.get(`/movie/${id}/credits?&${lang}`);
};

export const useMovieDetailCastsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-detail-casts', id],
    queryFn: () => fetchMovieDetailCasts({ id }),
    select: (result) => result.data,
  });
};