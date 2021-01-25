import React from 'react';
import post1 from '../../images/latest-news/post-1.png'
import post2 from '../../images/latest-news/post-2.png'

const LatestNewsItem = ({title, date, description}) => {
    return (
        <div className="latest-news-item">
            <img className="latest-news-item__image" src={post1} alt="" />
            <div className="latest-news-item__main">
                <div className="latest-news-item__main--title">
                {title}
                </div>
                <div className="latest-news-item__main--date">
               {date}
                </div>
                <div className="latest-news-item__main--description">
                {description}
                </div>
            </div>
        </div>
    )
}

export default LatestNewsItem
