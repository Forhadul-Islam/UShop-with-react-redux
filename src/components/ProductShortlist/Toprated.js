import React from 'react'
import MiniCard from '../utility/MiniCard'
import SectionTitle from '../utility/SectionTitle'
import product4 from '../../images/new-arrival/product-4.png'

const Toprated = () => {
    return (
        <div className="product-shorlist-item">
            <SectionTitle title="Top Rated Products" />
            <MiniCard 
            title="Drill Screwdriver Brandix ALX7050 200 Was"
            image={product4}
            price={410.00}
            rating={2}
            review="3"
            tag="New"
            
            />
            <MiniCard 
            title="Drill Screwdriver Brandix ALX7050 200 Was"
            image={product4}
            price={410.00}
            rating={2}
            review="3"
            tag="sale"
            
            />
            <MiniCard 
            title="Drill Screwdriver Brandix ALX7050 200 Was"
            image={product4}
            price={410.00}
            rating={2}
            review="3"
            
            />
        </div>
    )
}

export default Toprated
