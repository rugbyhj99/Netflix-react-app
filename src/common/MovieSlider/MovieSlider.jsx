import React from 'react';
import "./MovieSlider.style.css";
import Carousel from 'react-multi-carousel';
import { MovieCard }  from '../MovieCard/MovieCard'; 
import 'react-multi-carousel/lib/styles.css';

export const MovieSlider = ( {title, movies, responsive} ) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="movieslider-container">
        <h3 className='movieslider-title'>{title}</h3>
        <p>No movies available.</p>  // 데이터가 없음을 알리는 메시지
      </div>
    );
  }

  return (
    <div className="movieslider-container">
        <h3 className='movieslider-title'> {title} </h3>
            <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider p-2'
            containerClass="carousel-container"
            responsive={responsive}
            >
              {
                  movies?.map( (movie, index) => <MovieCard movie={movie} key ={index}/> )
              }
            </Carousel>
    </div>
  )
}
