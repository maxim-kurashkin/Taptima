import React from 'react';
import menu_ava from './img/menu_ava.jpg';
import AppDivider from '../app-divider/app-divider';
import AppMenuItems from '../app-menu-items/app-menu-items';
import support from './img/support.svg';
import dash from '../app-menu-items/icons/dash.svg';
import users from '../app-menu-items/icons/users.svg';
import products from '../app-menu-items/icons/products.svg';
import auth from '../app-menu-items/icons/auth.svg';
import tt from '../app-menu-items/icons/tt.svg';
import ic from '../app-menu-items/icons/ic.svg';
import ring from './img/ring.svg';
import quit from './img/quit.svg';
import './app-menu.css';





const AppMenu = () => {
    return(
        <div className="menu">
            <div className="menu__card">
                <img className="menu__ava"src={menu_ava} alt={"avatar"}/>
                <h2 className="menu__name">Roman Kutepov</h2>
                <h3 className="menu__pos">Brain Director</h3>
            </div>
            <AppDivider/>
            <div className="container__menu">
                <AppMenuItems label='Dashboard' icon={dash} title='Dashboard'/>
                <AppMenuItems label='Users' icon={users} title='Users'/>
                <AppMenuItems label='Products' icon={products} title='Products'/>
                <AppMenuItems label='Authentication' icon={auth} title='Authentication'/>
                <AppMenuItems label='Typography' icon={tt} title='Typography'/>
                <AppMenuItems label='Icons & Images' icon={ic} title='Icons & Images'/>
            <div/>
            </div>
            <AppDivider/>
            <div className = "support">
                <h3 className="support__header">Support</h3>
                <AppMenuItems label='Support' icon={support} title='Support'/>
            </div>
            <div className="hidden">
                    <img className="header__ring"src={ring} alt={"ring"}/>
                    <img className="header__quit"src={quit} alt={"quit"}/>
            </div>
        </div>
    )
}

export default AppMenu;