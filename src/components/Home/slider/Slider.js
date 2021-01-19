import { Carousel } from 'antd';
import React from 'react';
import SliderItem from './SliderItem';

const Slider = () => {
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <div>
            <Carousel dots={true} dotPosition="bottom" autoplay>
                {/* <div> */}
                {/* <h3 style={contentStyle}></h3> */}
                <SliderItem />
                <SliderItem />
                <SliderItem />
                {/* </div> */}
            </Carousel>
        </div>
    )
}

export default Slider
