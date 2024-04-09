import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieGenre=()=>{
    return api.get(`/genre/movie/list${lang}`)
};

export const useMovieGenreQuery=()=>{
    return useQuery({
        queryKey:['movie-genre'],
        queryFn:fetchMovieGenre,
        select: (result) => result.data.genres,
        staleTime:300000 // 5분
    });
};