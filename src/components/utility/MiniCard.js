import { Rate, Tag } from 'antd';
import React from 'react';

const MiniCard = ({title, image, price, rating, review, sale, tag}) => {

    const tagColor = tag === 'New' ? "#87d068" : '#f50'

    const productPrice = sale ? 
    <div className="mini-card__info--sale">
        <div className="mini-card__info--sale__current-price">
            ${price}
        </div>
        <div className="mini-card__info--sale__old-price">
            ${price - price * sale}
        </div>
    </div>
    : <div className="mini-card__info--price">
            ${price}
        </div>
    return (
        <div className="mini-card">
            <div className="mini-card__left">
            {sale && <Tag color="#f50">sale</Tag>}
            {tag && <Tag color={tagColor}>{tag}</Tag>}
             <img className="mini-card__left--image" src={image} alt={title} />
            </div>
            <div className="mini-card__info">
                <div className="mini-card__info--title">
                {title}
                </div>
                <div className="mini-card__info--rating">
                    <div className="mini-card__info--rating-stars">
                    <Rate style={{fontSize: '11px'}} disabled defaultValue={rating} />
                    </div>
                    <div className="mini-card__info--rating-reviews">
                        {review} reviews
                    </div>
                </div>
                {productPrice}
            </div>
        </div>
    )
}

export default MiniCard
