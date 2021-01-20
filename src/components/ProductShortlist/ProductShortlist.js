import React from 'react'
import BestSellers from './BestSellers'
import Special from './Special'
import Toprated from './Toprated'

const ProductShortlist = () => {
    return (
        <div className="product-shortlist">
            <Toprated />
            <Special />
            <BestSellers />
        </div>
    )
}

export default ProductShortlist
