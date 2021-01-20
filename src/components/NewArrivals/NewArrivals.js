import React from 'react'
import SectionMenu from '../utility/SectionMenu'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import NewArrivalItem from './NewArrivalItem'

const NewArrivals = () => {
    return (
        <div className="new-arrival">
        <div className="new-arrival__header">
             <SectionTitle title="New Arrivals" />
             <SectionMenu />
             <SectionNavigate />
        </div>
        <div className="new-arrival__main">
             <NewArrivalItem />
        </div>
     </div>
    )
}

export default NewArrivals
