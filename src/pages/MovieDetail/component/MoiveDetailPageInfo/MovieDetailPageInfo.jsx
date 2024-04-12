import React from 'react';
import "./MovieDetailPageInfo.style.css";
import star from "../images/ant-design_star-filled.png";
import person from "../images/Person plus.svg";
import under19 from "../images/all.svg";
import over19 from "../images/19age.svg"

const MovieDetailPageInfo = ( { movie, creditsData } ) => {
    
   
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