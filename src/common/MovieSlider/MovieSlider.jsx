import React from 'react';
import "./MovieSlider.style.css";
import Carousel from 'react-multi-carousel';
import { MovieCard }  from '../MovieCard/MovieCard'; 
import 'react-multi-carousel/lib/styles.css';

export const MovieSlider = ( {title, movies, responsive} ) => {
   
  return (
    <div className="movieslider-container">
        <h3 className='movieslider-title'> {title} </h3>
            <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider'
            containerClass="carousel-container"
            responsive={responsive}
            >
              {
                  movies.map( (movie, index) => <MovieCard movie={movie} key ={index}/> )
              }
            </Carousel>
    </div>
  )
}
