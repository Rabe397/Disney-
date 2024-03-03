import React,{useEffect} from 'react';
import {MoviesSec , MoviesContainer} from './style';
import { viewer1 ,viewer2} from './style';
import MoviePart from './MoviePart';
import { selectMovies } from '../../redux/disneySlice';
import {useSelector} from 'react-redux';

const Movies = () => {
  // const movies = useSelector(selectMovies);
  
  // useEffect(() => {
  //   let movie;
  //   movies && movies.map(movie => movie = movie)
  //   console.log(movies , movie)
  // }, [])
  
  return (
    <MoviesSec className='main-padd'>
        <MoviesContainer>
            {/* <MoviePart heading="Recomended for you" movie1={movie.cardImg[1]}  movie2={movie.cardImg[2]} movie3={movie.cardImg[3]} movie4={movie.cardImg[4]}/> */}
            <MoviePart heading="Recomended for you" movie1={viewer1}  movie2={viewer2} movie3={viewer1} movie4={viewer2}/>
            <MoviePart heading="News" movie1={viewer1}  movie2={viewer2} movie3={viewer1} movie4={viewer2}/>
            <MoviePart heading="Originals" movie1={viewer1}  movie2={viewer2} movie3={viewer1} movie4={viewer2}/>
            <MoviePart heading="Recomended for you" movie1={viewer1}  movie2={viewer2} movie3={viewer1} movie4={viewer2}/>
        </MoviesContainer>
    </MoviesSec>
  )
}

export default Movies