import React, { useState, useEffect } from 'react'
import SectionMenu from '../utility/SectionMenu'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import Products from './Products'
import { featuredProductData } from './featuredProductData';
import { useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils'

const Featured = (props) => {
    const {featuredProduct} = useSelector(state => state.productReducer);
    const [ productCount, setProductCount] = useState(0);
    const [activeList, setActiveList] = useState([])
    let ShowProduct = 4;
    let productLength = featuredProduct.length;

    useEffect(() => {
        handleForwardSlide()
    }, [])

    // const handleForwardSlide = () => {
    //     let count;
    //     if(productLength > ShowProduct) {
    //         setActiveList([...featuredProductData.slice(productCount, ShowProduct)])
    //         setProductCount(productCount + ShowProduct)
    //     }else if(productLength < ShowProduct && productLength !== 0) {
    //         setActiveList([...featuredProductData.slice(productCount, productLength - 1)])
    //         setProductCount(0)
    //     }
    //         setActiveList([...featuredProductData.slice(productCount, ShowProduct)])
    //         setProductCount(productCount + ShowProduct)
        

    //     console.log("activelist", activeList)
    // }

    
    console.log("activelist",activeList);
    console.log("fe", featuredProduct)
    
    const handleForwardSlide = ()=>{
        const allProduct = [...featuredProduct]
        let productNumber = productLength - 1
        console.log('productCount', productCount - productNumber)
        if(productCount < productNumber ){
            setProductCount(productCount + ShowProduct) 
            console.log('inside')
            setActiveList([featuredProduct[productCount],featuredProduct[productCount+1],featuredProduct[productCount+2],featuredProduct[productCount +3],])
        }else if(productCount >= productNumber){
            console.log('outside')
            setProductCount(0)
            setActiveList([featuredProduct[productCount],featuredProduct[productCount+1],featuredProduct[productCount+2],featuredProduct[productCount +3],])
        }    
    //     ShowProduct === 4 ? setActiveList([...featuredProduct.splice(productCount, 4)]) :
    // setActiveList([...featuredProduct.splice(productCount, productCount - productNumber)])
        // setReviewSliderAnimation("review__center--review-item review__slider--animation-slideOut")
        // setTimeout(() => {
        //     setReviewSliderAnimation("review__center--review-item")
        // }, 1000);
    }
    return (
        <div className="featured">
            <div className="featured__header">
                <div className="featured__header--title">
                    <SectionTitle title="Featured" />
                    {/* <button onClick={handleForwardSlide}>slide</button> */}
                </div>
                <div className="featured__header--menu">
                    <SectionMenu />
                </div>
                <div className="featured__header--navigate">
                    <SectionNavigate/>
                </div>
            </div>
            <Products
                products={activeList}
            />
        </div>
    )
}

export default Featured
