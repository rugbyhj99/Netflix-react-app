import React, { useState } from 'react';
import "./MovieDetailPageInfo.style.css";
import star from "../images/ant-design_star-filled.png";
import person from "../images/Person plus.svg";
import under19 from "../images/all.svg";
import over19 from "../images/19age.svg";
import Modal from 'react-bootstrap/Modal';
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer';
import MovieTrailer from '../MovieTrailer/MovieTrailer';


const MovieDetailPageInfo = ( { movie, creditsData, id } ) => {
    const { data: video } = useMovieTrailerQuery( { id } );
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    
   
  return (
    <div className="detail-info-container font">
        <h1>{movie.title}</h1>

        <div className="detail-info-genre">
            {
                movie?.genres.map((genre, index) => (
                    <div key={index} > {genre.name} </div>
                ))
            }
        </div>     

        <div className="detail-info-info1">
            <div>
                <div className="detail-info-info1-box">
                    <img src={star}/>                
                    {movie.vote_average? movie.vote_average.toFixed(1) : null}
                </div>
            </div>
            <div>
                <div className="detail-info-info1-box">
                    <img src={person}/>                
                    {movie.popularity}
                </div>
            </div>
            <div>{movie.adult? <img src={over19} /> : <img src={under19} /> }</div>
        </div>

        <div className="detail-info-btn">
            <button>시청하기</button>
            <button onClick={handleShow}>예고편 보기</button>

            <Modal 
                show={show} 
                onHide={handleClose}
                contentClassName="modal-container"
                dialogClassName='modal-90w' 
                size="lg"                               
                centered 
            >
                <Modal.Header className="modal-header p-3" closeButton closeVariant='white'>                
                </Modal.Header>
                <Modal.Body>
                    <MovieTrailer video={video}/>
                </Modal.Body>
                
            </Modal>
        </div>

        <div>        
            크리에이터 : 
            {
                creditsData?.crew?.slice(0, 1).map((crew, index) => (
                    <span key={index}> {crew.name}</span>
                )) 
            }        
        </div>

        <div>
            출연 : 
            {
                creditsData?.cast.slice(0, 5).map((cast) => (
                    <span> {cast.name}</span>
                )) 
            }
        </div>

        <div className="detail-info-info2">
            <div>개봉일 : {movie.release_date} </div>
            <div>예산 : {movie.budget.toLocaleString()}원</div>
        </div>

        <div>
            {movie.overview}
        </div>     

    </div>
  )
}

export default MovieDetailPageInfo