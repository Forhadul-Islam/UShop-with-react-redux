import React from 'react';
import logo from '../../images/U shop Logo-02.png';
import LandingNav from '../landingNav/LandingNav';
import Info from './info/Info';
import Menu from './menu/Menu';
import Nav from './nav/Nav';
import Slider from './slider/Slider';

const Home = () => {
    return (
        <div className="home">
            <div className="home__top-nav">
                <LandingNav />
            </div>
            <div className="home__main">
                <div className="home__main--left">
                    <img className="home__main--left__logo" src={logo} alt="logo" />
                    <div className="home__main--left__menu">
                        <Menu />
                    </div>
                </div>
                <div className="home__main--right">
                    <div className="home__main--right__info">
                        <Info />
                    </div>
                    <div className="home__main--right__nav">
                        <Nav />
                    </div>
                    <div className="home__main--right__slider">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
