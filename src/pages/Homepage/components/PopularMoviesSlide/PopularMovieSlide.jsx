import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from "bootstrap";
import { responsive } from '../../../../constants/responsive.js';
import { MovieSlider } from '../../../../common/MovieSlider/MovieSlider.jsx';



const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    if (isLoading) {
        return <h1>Loading....</h1>        
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }
    return (
    <div>
      <MovieSlider title='인기 영화' movies={data.results} responsive={responsive}/>
    </div>  
    )
}

export default PopularMovieSlide