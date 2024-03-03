import React from 'react';
import {LoginSec , Container , firstLogo , secondLogo} from './style';

const Login = () => {
  return (
    <LoginSec className='flex'>
        <Container>
            <figure>
                <img src={firstLogo} alt="logo" />
            </figure>
            <button className='get-all-btn'> GET ALL THERE </button>
            <p className="details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut eveniet praesentium 
                itaque sunt facere voluptatum necessitatibus laborum, voluptatibus libero sed quidem labore tempora eligendi?
            </p>
            <figure>
                <img src={secondLogo} alt="logo" />
            </figure>
        </Container>
    </LoginSec>
  )
}

export default Login