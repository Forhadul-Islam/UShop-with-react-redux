import React from 'react';
import SectionTitle from '../utility/SectionTitle';
import Card from '../utility/Card';
import product8 from '../../images/best-sellers/product-8.png'
import product9 from '../../images/best-sellers/product-9.png'
import product10 from '../../images/best-sellers/product-10.png'
import product11 from '../../images/best-sellers/product-11.png'
import product12 from '../../images/best-sellers/product-12.png'
import product13 from '../../images/best-sellers/product-13.png'
import Button from '../utility/Button'
import { AiOutlineProject, AiOutlineHeart } from 'react-icons/ai';


const BestSellers = () => {
    return (
        <div className="best-sellers">
                <SectionTitle title="Best Sellers" />
                <div className="best-sellers__main">
                    <div className="best-sellers__main--left">
                        <Card
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product8}
                            width="400"
                        >
                            <div className="best-sellers__main--left__bottom">
                                <Button>Add to Cart</Button>
                                <div className="best-sellers__main--left__bottom--options">
                                    <AiOutlineHeart className="best-sellers__main--left__bottom--options-icon" />
                                    <AiOutlineProject className="best-sellers__main--left__bottom--options-icon" />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="best-sellers__main--right">
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product9}
                        
                        />
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product10}
                        
                        />
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product11}
                        
                        />
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product12}
                        
                        />
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product13}
                        
                        />
                        <Card 
                            title="Hand Tool Kit"
                            price="259.00"
                            review="8"
                            rating ="3"
                            image={product8}
                        
                        />
                    </div>
                </div>
        </div>
    )
}

export default BestSellers
