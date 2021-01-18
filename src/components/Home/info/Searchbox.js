import React from 'react';
import { FiSearch } from 'react-icons/fi';


const Searchbox = () => {
    return (
        <div className="searchbox">
            <div className="searchbox__title">All Categories</div>
            <input
                className="searchbox__input"
                type="text"
                placeholder="Search over 10,000 products"
                name="search"
             />
             <FiSearch />
        </div>
    )
}

export default Searchbox
