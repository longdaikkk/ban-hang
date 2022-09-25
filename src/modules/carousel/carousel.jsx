import React from 'react'
import { Carousel } from 'antd';
import './index.scss'


export default function Carousels() {
  const onChange = (currentSlide) => {
  };

  return (
    <Carousel
    className='carou'
      autoplay={true} 
      afterChange={onChange}>
      <div >
        <img className='img-fluid' src="./img/banner.png"/>
      </div>
      <div >
        <img className='img-fluid' src="https://i.pinimg.com/originals/6f/39/35/6f393516f4f2876c5ff1b8ddcf57c638.jpg"/>
      </div>
      <div >
        <img className='img-fluid' src="https://i.pinimg.com/originals/21/4c/03/214c035eaee40a3cb5209af31dd6c99e.jpg"/>
      </div>
      <div >
        <img className='img-fluid' src="https://i.pinimg.com/originals/a0/04/7c/a0047c6fbe7355ce655176da3b4cba5e.jpg"/>
      </div>
    </Carousel>
  );
}
