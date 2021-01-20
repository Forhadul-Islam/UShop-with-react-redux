import React from 'react'
import SectionMenu from '../utility/SectionMenu'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import PopularItem from './PopularItem'
import category3 from '../../images/category/category-3.png'
import category4 from '../../images/category/category-4.png'
import category5 from '../../images/category/category-5.png'
import category6 from '../../images/category/category-6.png'
import category7 from '../../images/category/category-7.png'
import category8 from '../../images/category/category-8.png'

const PopularCategories = () => {
    return (
        <div className="popular-categories">
          <div className="popular-categories__main">
            <div className="popular-categories__main--header">
                    <SectionTitle title="Popular Categories" />
                    
                </div>
                <div className="popular-categories__main--body">
                    <PopularItem 
                        image={category3}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                    <PopularItem 
                        image={category4}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                    <PopularItem 
                        image={category5}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                    <PopularItem 
                        image={category6}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                    <PopularItem 
                        image={category7}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                    <PopularItem 
                        image={category8}
                        title="Power Tools"
                        text="Screwdrivers
                        Milling Cuers
                        Sanding Machines
                        Wrenches
                        Drills
                        "
                    />
                </div>
          </div>
        </div>
    )
}

export default PopularCategories
