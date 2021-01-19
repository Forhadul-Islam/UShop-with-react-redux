import React from 'react';
import baner from '../../images/Mask Group 1.png';
import Button from '../utility/Button'
const ProductBanar = () => {
    return (
        <div className="product-baner">
            <img className="product-baner__image" src={baner} alt="baner" />
            <div className="product-baner__info">
                <div className="product-baner__info--title">
                Hundreds Power Tools
                </div>
                <div className="product-baner__info--text">
                Hammers Chisels, Universal Pliers, Nippers jigsaws, Saws
                </div>
                <Button> Shop now</Button>
            </div>
        </div>
    )
}

export default ProductBanar
