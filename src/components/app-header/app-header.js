import React from 'react';
import {Link} from 'react-router-dom';
import './app-header.css';
import logo from './img/logo.svg';
import ring from './img/ring.svg';
import quit from './img/quit.svg';
import free from './img/free.svg';

// export default class AppFormInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             view: false
//         };
//         this.onView = this.onView.bind(this);
//         this.onView = this.onNoView.bind(this);
//     }

//     onView(e) {
//         this.setState(({view}) => ({
//             view: !view
//         }))
//     }
//     render() {
//             const {id, name, type, placeholder,label, dhavelabel} = this.props;
//             const {view} =this.state; 
    
//             let classNames = "form__input__label";
//             if(dhavelabel) {
//                 classNames +=' form__dont__label'
//             }
//             let classNamesV = "input__item__label";
//             if(view) {
//                 classNamesV +=' view'
//             }
//             return(
//                 <div className="form__input">
//                     <input value={{name}.value} className="form__input__item" id={id} name={name} type={type} placeholder={placeholder}
//                     onFocus={this.onView}/>
//                     <label className={classNamesV} htmlFor={id}>{placeholder}</label>
//                     <label onFocus={this.onView} onBlur={this.onNoView} className={classNames}>{label}</label>
//                 </div>
//                 <div className="container__header">
// //             <div className="header">
// //                 <div className="header__left">
// //                     <Link to='/'><img className="header__logo"src={logo} alt={"logo"}/></Link>
// //                     <div className="header__prom">
// //                     <div className="header__prom-item">
// //                         <img className="free"src={free} alt={"free"}/>
// //                         <label className="label">See our PRO version for more design components & coded in React follow this link: <a className="label-link" href="https://devias.io/products/devias-kit-pro">https://devias.io/products/devias-kit-pro</a></label>
// //                     </div>
// //                 </div>
// //                 </div>
// //                 <div className="hamburger">
// //                         <span className=" {}"></span>
// //                         <span className="hamburger__span"></span>
// //                         <span className="hamburger__span"></span>
// //                 </div>
// //                 <div className="header__right">
// //                     <img className="header__ring"src={ring} alt={"ring"}/>
// //                     <img className="header__quit"src={quit} alt={"quit"}/>
// //                 </div>
// //             </div>
// //         </div>
//             )
//         }
//     }


// const [menuActive, setMenuActive] = useState(false);
//     return(
//         <div className="menu__wrapper">
//             <div onClick={() =>  setMenuActive} className="hamburger">
//             <span className="hamburger__span"></span>
//             <span className="hamburger__span"></span>
//             <span className="hamburger__span"></span>
//         </div>
//         <div active={menuActive} setAcive={setMenuActive(!menuActive)} className={active ? 'menu active' : 'menu'}>
//             <div className="menu__card">
//                 <img className="menu__ava"src={menu_ava} alt={"avatar"}/>
//                 <h2 className="menu__name">Roman Kutepov</h2>
//                 <h3 className="menu__pos">Brain Director</h3>
//             </div>
//             <AppDivider/>
//             <div className="container__menu">
//                 <AppMenuItems label='Dashboard' icon={dash} title='Dashboard'/>
//                 <AppMenuItems label='Users' icon={users} title='Users'/>
//                 <AppMenuItems label='Products' icon={products} title='Products'/>
//                 <AppMenuItems label='Authentication' icon={auth} title='Authentication'/>
//                 <AppMenuItems label='Typography' icon={tt} title='Typography'/>
//                 <AppMenuItems label='Icons & Images' icon={ic} title='Icons & Images'/>
//             <div/>
//             </div>
//             <AppDivider/>
//             <div className = "support">
//                 <h3 className="support__header">Support</h3>
//                 <AppMenuItems label='Support' icon={support} title='Support'/>
//             </div>
//             <div className="hidden">
//                     <img className="header__ring"src={ring} alt={"ring"}/>
//                     <img className="header__quit"src={quit} alt={"quit"}/>
//             </div>
//         </div>
//         </div>
//     )

const AppHeader = () => {
    return (
        <div className="container__header">
            <div className="header">
                <div className="header__left">
                    <Link to='/'><img className="header__logo"src={logo} alt={"logo"}/></Link>
                    <div className="header__prom">
                    <div className="header__prom-item">
                        <img className="free"src={free} alt={"free"}/>
                        <label className="label">See our PRO version for more design components & coded in React follow this link: <a className="label-link" href="https://devias.io/products/devias-kit-pro">https://devias.io/products/devias-kit-pro</a></label>
                    </div>
                </div>
                </div>
                <div className="header__right">
                    <img className="header__ring"src={ring} alt={"ring"}/>
                    <img className="header__quit"src={quit} alt={"quit"}/>
                </div>
            </div>
        </div>


    )
}

export default AppHeader;