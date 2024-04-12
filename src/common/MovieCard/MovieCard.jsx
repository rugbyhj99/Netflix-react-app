import React from 'react'
import "./MovieCard.style.css"
import star from './MovieCard.IMG/ant-design_star-filled.png';
import over from './MovieCard.IMG/19age.svg';
import under from './MovieCard.IMG/all.svg';
import person from './MovieCard.IMG/Person plus.svg';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from "react-router-dom"; 

export const MovieCard = ( {movie} ) => {
    const { data:genreData } = useMovieGenreQuery();
    const navigate = useNavigate();    
   
    const goToMovieDetail = () => {
        console.log("무비는", movie);
        navigate(`/movies/${movie.id}`)
    }
    
    const showGenre= (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id === id)
            return genreObj.name;
        });
        return genreNameList;
    }
    
  return (
    <div style={ {background:"url(" + `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` + ")" } } className="movie-card" onClick={goToMovieDetail} >
        <div className="overlay">
            <h3 className="ms-2">{movie.title}</h3>
            <div>
            {
                showGenre(movie.genre_ids).map( (genre, index) => <span className="badge text-bg-danger ms-2" key={index}>{genre}</span>)
            }
            </div>
            <div className="overlay-bottom">
                <div>
                    <img src={star}/>
                    {movie.vote_average? movie.vote_average.toFixed(1) : null}
                </div>
                <div>
                    <img  src={person}/>
                    {movie.popularity}
                </div>
                <div>{movie.adult? <img src={ over } /> : <img src={ under } /> }</div>
            </div>
        </div>
    </div>
  )
}
