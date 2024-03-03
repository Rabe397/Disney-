import styled from 'styled-components';
import slider1 from '../../assets/images/slider-badag.jpg';
import slider2 from '../../assets/images/slider-badging.jpg';
import slider3 from '../../assets/images/slider-scale.jpg';
import slider4 from '../../assets/images/slider-scales.jpg';
import viewer1 from '../../assets/images/viewers-disney.png';
import viewer2 from '../../assets/images/viewers-pixar.png';
import viewer3 from '../../assets/images/viewers-marvel.png';
import viewer4 from '../../assets/images/viewers-starwars.png';
import viewer5 from '../../assets/images/viewers-national.png';
import bg from '../../assets/images/home-background.png';

// main
const HomeSec = styled.main`
  background-image:url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const HomeSecContainer = styled.main`

`

// slider
const SliderContainer = styled.main`
  margin-top: 70px;

  /* slick*/
  .slick-dots li button::before{
    color: rgb(120,120,120);
   }
  .slick-dots li.slick-active button::before{
    color: white;
   }

   .slider-box{
    
    img{
        width: 100%;
        height: 400px;

        &:hover{
            border: 1px solid white;
        }
        
    }    
   }  
  
`
// viewers
const ViewersContainer = styled.div`
  margin: 60px 0;

  figure{
    border: 1px solid rgb(100,100,100);
    padding: 0 40px;
    border-radius: 5px;
    position: relative;
    
    img{
        width: 100px;
        height: 100px;
    }

    video{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100px;
        height: 100px;
    }
  }
`
// movies
const MoviesSec = styled.section`
  margin-top: 60px;
`
const MoviesContainer = styled.div`

`
// movie-part
const MoviePartContainer = styled.div`
  
  .movies-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    margin-top: 30px;

    a{
      display: block;
      
        img{
            width: 100%;
            height: 100%;
        }
    } 
`
export {HomeSec,HomeSecContainer,SliderContainer,slider1,slider2,slider3,slider4,
        viewer1,viewer2,viewer3,viewer4,viewer5,ViewersContainer,MoviesSec , MoviesContainer,MoviePartContainer};
