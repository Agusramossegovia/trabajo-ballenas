'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
//import Slider from 'react-slick';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

function Carousel() { 
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    spaceBetween={50}
    effect="fade"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
        <SwiperSlide>
          <img src='../images/ballenaconbebe.jpg'alt="" style={{width: "75%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballenamusculus.jpg' alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballenaorca.jpg' alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballenasolitaria.jpg'alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
    </Swiper>
  );
};
export default Carousel