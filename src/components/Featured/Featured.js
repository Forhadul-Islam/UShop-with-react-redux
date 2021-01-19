import React from 'react'
import SectionMenu from '../utility/SectionMenu'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import Products from './Products'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featured__header">
                <div className="featured__header--title">
                    <SectionTitle title="Featured" />
                </div>
                <div className="featured__header--menu">
                    <SectionMenu />
                </div>
                <div className="featured__header--navigate">
                    <SectionNavigate/>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Featured
