import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { RiArrowDropRightLine } from 'react-icons/ri';
import MenuItem from './MenuItem';


const ServiceMenu = () => {
    const [showList, setShowList] = useState(true)
    return (
        <div className="menu">
            <div className="menu__top">
                <GiHamburgerMenu />
                <div className="menu__top--title">Shop By Category</div>
                <MdKeyboardArrowUp />
            </div>
            <div style={{display: showList? 'block' : 'none'}} className="menu__list">
            <MenuItem Icon={RiArrowDropRightLine} name="Powr Tools" />
            <MenuItem Icon={RiArrowDropRightLine} name="Hand Tools" />
            <MenuItem Icon={RiArrowDropRightLine} name="Machine Tools" />
            <MenuItem Icon={RiArrowDropRightLine} name="Building Supplies" />
            <MenuItem Icon={RiArrowDropRightLine} name="Electrical" />
            <MenuItem name="Power Machinery" />
            <MenuItem name="Cloths & PPE" />
            <MenuItem name="Plumbing" />
            <MenuItem name="Storage & Organization" />
            </div>
        </div>
    )
}

export default ServiceMenu
