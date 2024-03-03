import styled from 'styled-components';
import firstLogo from '../../assets/images/cta-logo-one.svg'
import secondLogo from '../../assets/images/cta-logo-two.png'
import bg from '../../assets/images/login-background.jpg';

const LoginSec = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 70px);
  opacity: 0.9;
  margin-top: 70px;
  position: relative;

  &:before{
    content:'';
    position: absolute;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.3);
    z-index: -1;
  }

  &.flex{
    justify-content: center;
  }
`
const Container = styled.div`
  max-width: 400px;

  img{
    display: flex;
    width: 400px;
    margin: auto;
    margin-bottom: 15px;
  }

  .get-all-btn{
    background-color: blue;
    color: white;
    max-width: 400px;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border: none;
    opacity: 0.7;

    &:hover{
        opacity: 0.9;
    }
  }

  .details{
    margin: 15px auto;
    text-align: center;
  }
`
export {LoginSec , Container , firstLogo , secondLogo}