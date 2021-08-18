import React from 'react';
import './app-menu-items.css';

const AppMenuItems = ({label, icon, title}) => {
    return(
            <li className="menu__item">
                <img className="menu__icon "src={icon} alt={title}/>
                <label className="menu__label">{label}</label>
            </li>
    )
}

export default AppMenuItems;


