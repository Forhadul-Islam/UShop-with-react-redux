import React from 'react'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import LatestNewsItem from './LatestNewsItem'
import logo1 from '../../images/partners/logo-1.png'
import logo2 from '../../images/partners/logo-2.png'
import logo3 from '../../images/partners/logo-3.png'
import logo4 from '../../images/partners/logo-4.png'
import logo5 from '../../images/partners/logo-5.png'
import logo6 from '../../images/partners/logo-6.png'

const LatestNews = () => {
    return (
        <div className="latest-news">
            <div className="latest-news__header">
                <SectionTitle title="Latest News" />
                <SectionNavigate />
            </div>
            <div className="latest-news__main">
                <LatestNewsItem 
                    title="AVariety Of Other Academic And NonAcademic Approaches Have Been"
                    date="October 19, 2019"
                    description="In One General Sense, phiQuisque semper
                    magna eget libero maximus, a sollicitudin
                     nunc hendrerit. Cras efficitur, ante vitae"
                />
                <LatestNewsItem 
                    title="AVariety Of Other Academic And NonAcademic Approaches Have Been"
                    date="October 19, 2019"
                    description="In One General Sense, phiQuisque semper
                    magna eget libero maximus, a sollicitudin
                     nunc hendrerit. Cras efficitur, ante vitae"
                />
            </div>
            <div className="latest-news__partners">
                <img src={logo1} alt="partner" />
                <img src={logo2} alt="partner" />
                <img src={logo3} alt="partner" />
                <img src={logo4} alt="partner" />
                <img src={logo5} alt="partner" />
                <img src={logo6} alt="partner" />
            </div>
        </div>
    )
}

export default LatestNews
