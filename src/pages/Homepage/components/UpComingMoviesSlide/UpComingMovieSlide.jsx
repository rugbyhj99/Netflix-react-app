import React from 'react'
import { useUpComingMoviesQuery } from '../../../../hooks/useUpComingMovies.js'
import { Alert } from "bootstrap";

import { responsive } from '../../../../constants/responsive.js';
import { MovieSlider } from '../../../../common/MovieSlider/MovieSlider.jsx';



const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = useUpComingMoviesQuery();
    if (isLoading) {
        return <h1>Loading....</h1>        
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }
    return (
    <div>
      <MovieSlider title='UpComing Movies' movies={data.results} responsive={responsive}/>
    </div>  
    )
}

export default PopularMovieSlide