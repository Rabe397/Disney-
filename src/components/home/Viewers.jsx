import React from 'react';
import {ViewersContainer,viewer1,viewer2,viewer3,viewer4,viewer5} from './style';

const Viewers = () => {
  return (
    <ViewersContainer className='main-padd flex'>
        <figure>
            <img src={viewer1} alt="disney" />
        </figure>
        <figure>
            <img src={viewer2} alt="pixar" />
        </figure>
        <figure>
            <img src={viewer3} alt="marvel" />
        </figure>
        <figure>
            <img src={viewer4} alt="star-wars" />
        </figure>
        <figure>
            <img src={viewer5} alt="national-geo" />
        </figure>
    </ViewersContainer>
  )
}

export default Viewers;