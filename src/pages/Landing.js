import React from 'react';
import BestSellers from '../components/BestSeller/BestSellers';
import Featured from '../components/Featured/Featured';
import Home from '../components/Home/Home';
import LatestNews from '../components/LatestNews/LatestNews';
import NewArrivals from '../components/NewArrivals/NewArrivals';
import PopularCategories from '../components/popularCategories/PopularCategories';
import ProductBanar from '../components/productBaner/ProductBaner';
import ProductShortlist from '../components/ProductShortlist/ProductShortlist';
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
        <LatestNews />
        <ProductShortlist />
        </>
    )
}

export default landing
