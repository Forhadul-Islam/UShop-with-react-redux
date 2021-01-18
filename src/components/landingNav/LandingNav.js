import React from 'react'

const LandingNav = () => {
    return (
        <div className="landing-nav">
            <ul className="landing-nav__set">
                <li className="landing-nav__set-item">About Us</li>
                <li className="landing-nav__set-item">Contacts</li>
                <li className="landing-nav__set-item">Store Location</li>
                <li className="landing-nav__set-item">Track Order</li>
                <li className="landing-nav__set-item">Blog</li>
            </ul>
            <ul className="landing-nav__set">
                <li className="landing-nav__set-item">My Account</li>
                <li className="landing-nav__set-item">Currency</li>
                <li className="landing-nav__set-item">Languadge</li>
            </ul>
        </div>
    )
}

export default LandingNav
