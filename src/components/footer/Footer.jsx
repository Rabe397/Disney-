import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/home-background.png'

const Footer = () => {
  return (
    <FooterSec>
        <p> Developed by Rabee 2024 </p>
    </FooterSec>
  )
}

const FooterSec = styled.footer`
  text-align: center;
  background-image:url(${bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 10px 0;
  

`
export default Footer