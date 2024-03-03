import React, { useEffect , useState} from 'react';
import {DetailsSec , Container , Play , Trailer , Plus , Group , upperImg , blackPlay , whitePlay , plus , group} from './style.js';
import {useParams} from 'react-router-dom';
import { db } from '../../firebase.js';

const Details = () => {
    const {id} = useParams();
    const [movie ,setMovie] = useState({});
    console.log(id);

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data())
            }else{
                // redirect-to-home
            }
        })
    },[id])
    console.log(movie)

  return (
    <DetailsSec className='main-padd'>
        <Container>
            {
                movie && 
                // movie.backgroundImg movie.titleImg movie.subTitle movie.description
                  <>
                   <div className="upper-image">
                     <img src={upperImg} alt="logo" />
                  </div>
                  <div className="btns flex">
                    <Play className="flex">
                      <img src={blackPlay} alt="play-icon" />
                      <span> PLAY </span>
                    </Play>
                    <Trailer className="flex">
                      <img src={whitePlay} alt="play-icon" />
                      <span> TRAILER </span>
                    </Trailer>
                    <Plus className="flex">
                      <img src={plus} alt="plus" />
                    </Plus>
                    <Group className="flex">
                      <img src={group} alt="group" />
                    </Group>
                   </div>
                  <div className="movie-sort">
                      2018 - 7m - Family , Kids , Animation
                  </div>
                  <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nulla incidunt alias ipsam modi assumenda, 
                    laboriosam laborum eius quae accusamus.
                 </div>
                </>
            }
            
        </Container>
    </DetailsSec>
  )
}

export default Details;