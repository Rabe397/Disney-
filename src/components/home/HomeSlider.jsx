import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SliderContainer,slider1,slider2,slider3,slider4} from './style';

const HomeSlider = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

  return (
    <SliderContainer className='main-padd'>
        <Slider {...settings} >
            <div className='slider-box'>
              <figure>
                <img src={slider1} alt="slider1" />
              </figure>
            </div>
            <div className='slider-box'>
              <figure>
                <img src={slider2} alt="slider2" />
              </figure>
            </div>
            <div className='slider-box'>
              <figure>
                <img src={slider3} alt="slider3" />
              </figure>
            </div>
            <div className='slider-box'>
              <figure>
                <img src={slider4} alt="slider4" />
              </figure>
            </div>
        </Slider>
    </SliderContainer>
  )
}

export default HomeSlider