import React from 'react'
import { usePopularMoivesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css"

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoivesQuery()
    console.log("ddd", data);
    if (isLoading){
        <h1>Loading....</h1>
    }
    if (isError){
        <Alert variant='danger'>{error.message}</Alert>
    }
    return (
    
        <div style={ { backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}` + ")",  width: '100vw'} } className="banner">
            <div className="text-white banner-text-area banner-font-size">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    )
}

export default Banner