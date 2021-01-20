import React from 'react';
import BestSellers from '../components/BestSeller/BestSellers';
import Featured from '../components/Featured/Featured';
import Home from '../components/Home/Home';
import NewArrivals from '../components/NewArrivals/NewArrivals';
import PopularCategories from '../components/popularCategories/PopularCategories';
import ProductBanar from '../components/productBaner/ProductBaner';
import Services from '../components/Services/Services';

const landing = () => {
    return (
        <>
        <Home />
        <Services />
        <Featured />
        <ProductBanar />
        <BestSellers />
        <PopularCategories />
        <NewArrivals />
        </>
    )
}

export default landing
