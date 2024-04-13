import React, { useState } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useMovieDetailCastsQuery } from '../../hooks/useMovieDetailCasts';
import { useMovieDetailReviewsQuery } from '../../hooks/useMovieDetailReview';
import { useMovieDetailRecommendQuery } from '../../hooks/useMovieDetailRecommend.js';
import MovieDetailPageInfo from "./component/MoiveDetailPageInfo/MovieDetailPageInfo.jsx"
import "./MovieDetailPage.style.css"
import MovieDetailReview from './component/MovieDetailReview/MovieDetailReview.jsx';
import MovieDetailRecommend from './component/MovieDetailRecommend/MovieDetailRecommend.jsx';


const MovieDetailPage = () => {
  const { id } = useParams();  
  const { data: movie, isLoading, isError, error } = useMovieDetailQuery( { id } );
  const { data: creditsData } = useMovieDetailCastsQuery( { id } );
  const { data: review } = useMovieDetailReviewsQuery( { id } );
  const { data: recommend } = useMovieDetailRecommendQuery( { id } );  
 
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="danger" style={ { width: "5rem", height: "5rem" } }/>
      </div>
    )
  }
  if (isError) {
    return <Alert variant="danger"> {error.message}</Alert>
  }

  return (
    <div className="detail-page">      
      <div className="detail-content">
        <div className="detail-background" style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.backdrop_path})` }}></div>
          <Row>
            <Col lg={6} xs={12} className="order-2 order-lg-1">
              <MovieDetailPageInfo movie={movie} creditsData={creditsData} id={id} />
            </Col>
            <Col lg={6} xs={12} className="detail-content-img-area order-1 order-lg-2">
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`} className="detail-img" />
            </Col>            
          </Row>        
      </div>

      <div className="detail-review">
        <MovieDetailReview review={review}/>
      </div>
      
      <div>
        <MovieDetailRecommend recommend={recommend}/>
      </div>
    </div>
  )
}

export default MovieDetailPage