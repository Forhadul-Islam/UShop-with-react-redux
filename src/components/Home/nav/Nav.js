import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoIosPerson } from "react-icons/io";


const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__list--item">Home</li>
                <li className="nav__list--item">Megamenu</li>
                <li className="nav__list--item">Shop</li>
                <li className="nav__list--item">Accounts</li>
                <li className="nav__list--item">Blog</li>
                <li className="nav__list--item">Pages</li>
                <li className="nav__list--item">Buy Theme</li>
            </ul>            
            <div className="nav__icons">
                <AiOutlineHeart className="nav__icons--item" />
                <HiOutlineShoppingCart className="nav__icons--item"  />
                <IoIosPerson className="nav__icons--item"  />
            </div>            
        </div>
    )
}

export default Nav
