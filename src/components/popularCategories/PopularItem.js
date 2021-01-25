import React from 'react'

const PopularItem = ({image, title, text}) => {
    return (
        <div className="popular-item">
            <img className="popular-item__image" src={image} alt="title" />
            <div className="popular-item__info">
                <div className="popular-item__info--title">
                    {title}
                </div>
                <div className="popular-item__info--text">
                    {text}
                </div>
                <div className="popular-item__info--show-all">
                    Show All
                </div>
            </div>

        </div>
    )
}

export default PopularItem
