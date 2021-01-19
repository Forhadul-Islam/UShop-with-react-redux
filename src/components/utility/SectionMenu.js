import React from 'react'

const SectionMenu = () => {
    return (
        <ul className="section-menu">
            <li>
                <a className="section-menu--item section-menu--selected-item ">All</a>
            </li>
            <li>
                <a className="section-menu--item">Power Tools</a>
            </li>
            <li>
                <a className="section-menu--item">Hand Tools</a>
            </li>
            <li>
                <a className="section-menu--item">Plumbing</a>
            </li>
        </ul>
    )
}

export default SectionMenu;
