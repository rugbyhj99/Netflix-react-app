import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = 'language=ko-KR'; // 언어설정 추가

const fetchMovieDetailRecommend = ({ id }) => {
  return api.get(`/movie/${id}/recommendations?&${lang}`);
};

export const useMovieDetailRecommendQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-detail-Recommend', id],
    queryFn: () => fetchMovieDetailRecommend({ id }),
    select: (result) => result.data,    
  });
};