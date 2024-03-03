import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import homeIcon from '../../assets/images/home-icon.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import whatchlistIcon from '../../assets/images/watchlist-icon.svg';
import originalsIcon from '../../assets/images/original-icon.svg';
import movieIcon from '../../assets/images/movie-icon.svg';
import seriesIcon from '../../assets/images/series-icon.svg';

const SiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  z-index: 99;
`
const Container = styled.div`
  padding: 10px 0;

  .site-logo{
    width: 80px;
    height: 50px;
  }

  .user{
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%; 
    }

    .login-btn{
      color: white;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 3px;
      padding: 8px 10px;
      transition: 0.2s;

      &:hover{
        color: black;
        background-color: white;
      }
    }
  }
`
const Nav = styled.nav`
  color: white;

  &.flex{
    gap: 15px;
  }

  a.flex{
    gap: 5px;
  }
  img{
    width: 20px;
    height: 20px;
  }
`
const NavLast = styled.div`

`

export {SiteHeader,Container,Nav,logo,homeIcon,searchIcon,whatchlistIcon,originalsIcon,movieIcon,seriesIcon,NavLast};