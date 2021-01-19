import React from 'react'
import ServicesItem from './ServiceItem';
import coupon from '../../images/services/coupon.png';
import support from '../../images/services/support.png';
import group from '../../images/services/Group 4144.png';
import freeDelivery from '../../images/services/free-delivery.png';

const Services = () => {
    return (
        <div className="services">
            <ServicesItem 
                title="Free Shipping"
                text="For Order From $50"
                icon={freeDelivery}
            />
            <ServicesItem 
                title="Free Shipping"
                text="For Order From $50"
                icon={support}
            />
            <ServicesItem 
                title="Free Shipping"
                text="For Order From $50"
                icon={group}
            />
            <ServicesItem 
                title="Free Shipping"
                text="For Order From $50"
                icon={freeDelivery}
            />
        </div>
    )
}

export default Services
