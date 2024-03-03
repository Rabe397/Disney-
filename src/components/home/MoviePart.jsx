import React from 'react';
import {MoviePartContainer} from './style';
import {Link} from  'react-router-dom';
import { selectMovies } from '../../redux/disneySlice';
import {useSelector} from 'react-redux';

const MoviePart = (props) => {
    const movies = useSelector(selectMovies);
  
  useEffect(() => {
    let movie;
    movies && movies.map(movie => movie = movie)
    console.log(movies , movie)
  }, [])

  return (
    <MoviePartContainer>
        <h2> {props.heading} </h2>
        <div className="movies-container">
            {/* <Link to={`/details/${movie.id}`}>
                <img src={props.movie1} alt="movie" />
            </Link> */}
            <Link>
                <img src={props.movie2} alt="movie" />
            </Link>
            <Link>
                <img src={props.movie3} alt="movie" />
            </Link>
            <Link>
                <img src={props.movie4} alt="movie" />
            </Link>
        </div>
    </MoviePartContainer>
  )
}

export default MoviePart