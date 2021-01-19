import React from 'react';
import Card from '../utility/Card';
import product11 from '../../images/featured-products/product-11.png'
import product12 from '../../images/featured-products/product-12.png'
import product13 from '../../images/featured-products/product-13.png'
import product14 from '../../images/featured-products/product-14.png'

const Products = () => {
    return (
        <div className="featured__products">
            <Card 
                title="Hand Tool Kit"
                rating= "4"
                review =  "7"
                price ="149.00"
                image ={product11}
            />
            <Card 
                title="Hand Tool Kit"
                rating= "4"
                review =  "7"
                price ="149.00"
                image ={product12}
            />
            <Card 
                title="Hand Tool Kit"
                rating= "4.5"
                review =  "7"
                price ="149.00"
                image ={product13}
            />
            <Card 
                title="Hand Tool Kit"
                rating= "4"
                review =  "7"
                price ="149.00"
                image ={product14}
            />
        </div>
    )
}

export default Products
