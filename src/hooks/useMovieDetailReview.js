import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = 'language=ko-KR'; // 언어설정 추가

const fetchMovieDetailReviews = ({ id }) => {
  return api.get(`/movie/${id}/reviews`);
};

export const useMovieDetailReviewsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-detail-reviews', id],
    queryFn: () => fetchMovieDetailReviews({ id }),
    select: (result) => result.data.results,    
  });
};