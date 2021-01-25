import React from 'react'

const MenuItem = ({Icon, name}) => {
    return (
        <div className="menu__list--item">
            <div>{name}</div>
           {Icon &&  <Icon />}
        </div>
    )
}

export default MenuItem
