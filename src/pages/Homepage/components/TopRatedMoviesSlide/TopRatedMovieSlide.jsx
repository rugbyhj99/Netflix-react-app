import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovie.js';
import { Alert } from "bootstrap";

import { responsive } from '../../../../constants/responsive.js';
import { MovieSlider } from '../../../../common/MovieSlider/MovieSlider.jsx';



const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    if (isLoading) {
        return <h1>Loading....</h1>        
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }
    return (
    <div>
      <MovieSlider title='최고 평점 영화' movies={data.results} responsive={responsive}/>
    </div>  
    )
}

export default PopularMovieSlide