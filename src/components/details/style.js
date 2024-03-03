import styled from 'styled-components';
import upperImg from '../../assets/images/viewers-disney.png';
import blackPlay from '../../assets/images/play-icon-black.png';
import whitePlay from '../../assets/images/play-icon-white.png';
import plus from '../../assets/images/watchlist-icon.svg'; 
import group from '../../assets/images/group-icon.png';
import bg from '../../assets/images/slider-badging.jpg';

const DetailsSec = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 70px);
  opacity: 0.9;
  margin-top: 70px;
`
const Container = styled.div`
  
  .upper-image{
    

    img{
        width: 150px;
        height: 150px;
        margin-top: 100px;
    }
  }

  .btns{
    width: 40%;
    max-width: 600px;
    margin: 20px 0;
  }

  .movie-sort{
    margin: 20px 0;
  }

  .description{
    width: 80%;
  }
`
const Play = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: white;

  span{
    margin-left: 3px;
  }

`
const Trailer = styled(Play)`
  background-color: rgba(0,0,0,0.5);
  color: white;

  &:hover{
    background-color: rgba(0,0,0,0.9);
  }
`
const Plus = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
  
  &.flex{
    justify-content: center;
  }

  img{
    width: 30px;
    height: 30px;
  }
`
const Group = styled(Plus)`
  background-color: rgb(0,0,0);
`
export {DetailsSec , Container , Play , Trailer , Plus , Group , upperImg , blackPlay , whitePlay , plus ,group};