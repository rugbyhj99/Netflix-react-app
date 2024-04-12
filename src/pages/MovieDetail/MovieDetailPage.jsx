import React from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useMovieDetailCastsQuery } from '../../hooks/useMovieDetailCasts';
import MovieDetailPageInfo from './component/MovieDetailPageInfo';
import "./MovieDetailPage.style.css"





const MovieDetailPage = () => {
  const { id } = useParams();
  console.log("아이디는", id);
  const {data: movie, isLoading, isError, error} = useMovieDetailQuery( { id } );
  const {data: creditsData} = useMovieDetailCastsQuery( { id });
  console.log(movie);
 
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
      <div className="detail-background" style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.backdrop_path})` }}></div>
      <div className="detail-content">
        <Container>
          <Row>
            <Col lg={6} xs={12} className="order-2 order-lg-1">
              <MovieDetailPageInfo movie={movie} creditsData={creditsData} />
            </Col>
            <Col lg={6} xs={12} className="detail-content-img-area order-1 order-lg-2">
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`} className="detail-img" />
            </Col>
            
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MovieDetailPage