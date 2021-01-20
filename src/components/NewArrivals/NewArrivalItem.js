import React from 'react'
import MiniCard from '../utility/MiniCard';
import product3 from '../../images/new-arrival/product-3.png'
import product4 from '../../images/new-arrival/product-4.png'
import product5 from '../../images/new-arrival/product-5.png'
import product6 from '../../images/new-arrival/product-6.png'
import product7 from '../../images/new-arrival/product-7.png'

const NewArrivalItem = () => {
    return (
       <>
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            sale={0.5}
            image={product3}
           />
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            sale={0.5}
            image={product4}
           />
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            image={product5}
           />
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            sale={0.5}
            image={product6}
           />
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            image={product6}
           />
           <MiniCard 
            title="Drill Screwdriver Brandix
            ALX7050 200 Was
            "
            price={149.00}
            rating={5}
            review="9"
            image={product7}
           />
       </>
    )
}

export default NewArrivalItem
