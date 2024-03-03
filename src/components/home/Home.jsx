import React, { useEffect } from 'react';
import {HomeSec,HomeSecContainer} from './style';
import HomeSlider from './HomeSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import {db} from '../../firebase';
import {collection} from  'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../redux/disneySlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const collRef = collection(db , 'movies').onSnapshot((snapshot)=>{
      let tempMovies = snapshot.docs.map((doc)=>{
        return{...doc.data() , id:doc.id};
      })
      console.log(tempMovies , doc.data());
  dispatch(setMovies(tempMovies));
    })
  },[])

  return (
    <HomeSec>
        <HomeSecContainer>
            <HomeSlider/>
            <Viewers />
            <Movies />
        </HomeSecContainer>
    </HomeSec>
  )
}

export default Home