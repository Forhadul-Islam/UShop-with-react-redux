import React from 'react'

const ServicesItem = ({title, icon, text}) => {
    return (
        <div className="services-item">
            <img className="services-item__icon" src={icon} alt={title} />
            <div className ="services-item__content">
                <div className="services-item__content--title">{title}</div>
                <div className="services-item__content--text">{text}</div>
            </div>
        </div>
    )
}

export default ServicesItem
