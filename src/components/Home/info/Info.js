import React from 'react'
import Searchbox from './Searchbox'

const Info = () => {
    return (
        <>
            <Searchbox />
            <div  className="home__main--right__info--contact">
                <div className="home__main--right__info--contact-title">Customer Service</div>
                <strong className="home__main--right__info--contact-number">(800)5201460</strong>
            </div>
        </>
    )
}

export default Info
