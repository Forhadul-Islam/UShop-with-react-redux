import React from 'react';
import post1 from '../../../images/post-9.png';
import Button from '../../utility/Button';

const SliderItem = () => {
    return (
        <div className="slider-item">
            <img className="slider-item__image" src={post1} alt="post1" />
            <div className="slider-item__info">
                <div className="slider-item__info--title">Big Choice of
                    Plumbing products
                </div>
                <div className="slider-item__info--text">
                Lorem Ipsum dolor sit amet, consecteture adipiscing elit
                eam pharetrab laoreet dui quis molese
                </div>
                <Button>Shop now</Button>
            </div>
            <div className="slider-item__cover"></div>
        </div>
    )
}

export default SliderItem
