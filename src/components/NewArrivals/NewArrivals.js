import React from 'react'
import SectionMenu from '../utility/SectionMenu'
import SectionNavigate from '../utility/SectionNavigate'
import SectionTitle from '../utility/SectionTitle'
import NewArrivalItem from './NewArrivalItem'

const NewArrivals = () => {
    return (
        <div className="new-arrival">
        <div className="new-arrival__header">
             <div className="new-arrival__header--title">
               <SectionTitle title="New Arrivals" />
             </div>
             <div className="new-arrival__header--menu">
               <SectionMenu />
             </div>
             <div className="new-arrival__header--navigate">
                <SectionNavigate />
             </div>
        </div>
        <div className="new-arrival__main">
             <NewArrivalItem />
        </div>
     </div>
    )
}

export default NewArrivals
