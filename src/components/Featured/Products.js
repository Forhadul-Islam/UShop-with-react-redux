import React, { useState } from 'react';
import Card from '../utility/Card';
import product11 from '../../images/featured-products/product-11.png'
import product12 from '../../images/featured-products/product-12.png'
import product13 from '../../images/featured-products/product-13.png'
import product14 from '../../images/featured-products/product-14.png'
import { featuredProductData } from './featuredProductData';
import { useSelector } from 'react-redux';


const Products = ({products}) => {
    const {featuredProduct} = useSelector(state => state.productReducer);
    return (
        <div className="featured__products">
            {
                products.map(product => (
                    <Card 
                    key={product.title}
                    title={product.title}
                    rating= {product.rating}
                    review =  {product.review}
                    price = {product.price}
                    // image ={require(`../../images/featured-products/${product.image}`)}
                    image={product12}
                />
                ))
            }
        </div>
    )
}

export default Products
