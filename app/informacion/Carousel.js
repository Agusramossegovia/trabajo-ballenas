import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carousel () {
    const setting={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesTorScroll: 1
    };
    return(
        <div>
            <h3>holis</h3>
            <Slider {...setting}>
                <div>
                <h4 >1</h4>
                </div>
                <div>
                <h4>1</h4>
                </div>
                

            </Slider>
        </div>
    )
}
export default Slider