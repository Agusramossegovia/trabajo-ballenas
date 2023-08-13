'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay} from 'swiper/modules';

function Slider() { 
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
    spaceBetween={50}
    effect='AutoPlay'
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
        <SwiperSlide>
          <img src='../images/ballena1.jpg'alt="" style={{width: "75%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballena2.jpg' alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballenas3.jpg' alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballena4.jpg'alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/ballena5.jpg'alt="" style={{width: "100%", height:"100vh"}}/>
        </SwiperSlide>
    </Swiper>
  )
}
export default Slider 