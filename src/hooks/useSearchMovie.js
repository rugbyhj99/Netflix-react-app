import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const lang = 'language=ko-KR'; // 언어설정 추가

const fetchSearchMovie = ( { keyword, page } ) => {
    return keyword?api.get(`/search/movie?query=${keyword}&${lang}&page=${page}`):api.get(`/movie/popular?${lang}&page=${page}`)
}

export const useSearchMovieQuery = ( { keyword, page } ) => {
    return useQuery({
        queryKey: [ 'movie-search', keyword, page ],
        queryFn: () => fetchSearchMovie( { keyword, page } ),
        select : (result)=> result.data
    })
}