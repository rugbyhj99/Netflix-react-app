import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMoviesSlide/PopularMovieSlide.jsx'
import TopRatedMovieSlide from './components/TopRatedMoviesSlide/TopRatedMovieSlide.jsx'
import UpComingMovieSlide from './components/UpComingMoviesSlide/UpComingMovieSlide.jsx'

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming moive
const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularMovieSlide></PopularMovieSlide>
      <TopRatedMovieSlide></TopRatedMovieSlide>
      <UpComingMovieSlide></UpComingMovieSlide>
      
    </div>
  )
}

export default Homepage