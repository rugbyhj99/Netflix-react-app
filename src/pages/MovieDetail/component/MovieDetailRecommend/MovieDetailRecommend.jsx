import React from 'react';
import "./MovieDetailRecommend.style.css";
import { MovieSlider } from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';


const MovieDetailRecommend = ( {recommend} ) => {
  console.log("추천은" , recommend);
  return (
    <div>      
      <MovieSlider title='이 영화와 비슷한 영화' movies={recommend?.results} responsive={responsive}/>
    </div>
  )
}

export default MovieDetailRecommend