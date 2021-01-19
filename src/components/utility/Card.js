import React from 'react';
import { Card as ProductCard, Rate } from 'antd';
import product1 from '../../images/featured-products/product-11.png'
import product2 from '../../images/featured-products/product-12.png'
import product3 from '../../images/featured-products/product-13.png'
import product4 from '../../images/featured-products/product-14.png'


const Card = ({width = 270, title, rating, review, price, image, children}) => {
    return (
        < >
            <ProductCard className="card" style={{maxWidth: {width}, border: '1px solid #ebdede'}} >
                <img className="card__image" src={image} alt="Featured-product" />
                <div className="card__info">
                    <div className="card__info--title">
                        {title}
                    </div>
                    <div className="card__info--rating">
                    <Rate style={{fontSize:"11px"}} className="card__info--rating-star" disabled defaultValue={rating} />
                    <p className="card__info--rating-reviews">{review} Reviews</p>
                    </div>
                    <div className="card__info--price">
                        ${price}
                    </div>
                </div>
                {children}
            </ProductCard>
        </>
    )
}

export default Card
