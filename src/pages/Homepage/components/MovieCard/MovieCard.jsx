import React from 'react'
import "./MovieCard.style.css"
import star from './MovieCard.IMG/ant-design_star-filled.png';
import over from './MovieCard.IMG/19age.svg';
import under from './MovieCard.IMG/all.svg';
import person from './MovieCard.IMG/Person plus.svg';

export const MovieCard = ({movie}) => {    
  return (
    <div style={ {background:"url(" + `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` + ")" } } className="movie-card" >
        <div className="overlay">
            <h3 className="ms-2">{movie.title}</h3>
            <div>
            {
                movie.genre_ids.map( (id) => <span class="badge text-bg-danger ms-2">{id}</span>)
            }
            </div>
            <div className="overlay-bottom">
                <div>
                    <img src={star} width={15} />
                    {movie.vote_average? movie.vote_average.toFixed(1) : null}
                </div>
                <div>
                    <img  src={person} width={15}/>
                    {movie.popularity}
                </div>
                <div>{movie.adult? <img src={ over } width={15}/> : <img src={ under } width={15}/> }</div>
            </div>
        </div>
    </div>
  )
}
