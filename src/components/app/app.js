import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppMenu from '../app-menu';
import AppTabs from '../app-tabs';
import AppProfileForm from '../app-profile-form';
import AppAccount from '../app-account';
import AppPlans from '../app-plans';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.OnActive = this.OnActive.bind(this);
    }

    OnActive(e) {
        this.setState(({active}) => ({
            active: !active
        }))
    }
    render() {
        const {active} = this.state;
        let classNames = "hamburger__span";
        let classView = "left__side";
        let classOverlay = "menu__overlay";
        if(active) {
            classNames +=' hamburger__span__active'
            classView +=' left__side__active'
            classOverlay += ' menu__overlay__active'
        }

        return(
            <Router>
                <div className="app">
                    <AppHeader/>
                    <div className="container__main">
                    <div onClick={this.OnActive} className="hamburger">
                        <span className={classNames}></span>
                        <span className={classNames}></span>
                        <span className={classNames}></span>
                    </div>
                        <div className={classView}>
                            <AppMenu/>
                        </div>
                        <div className= "right__side">
                        <div className={classOverlay}></div>
                            <AppTabs/>
                            <Route path='/' exact component={() => <div className="hello">Приветствуем! Пожалуйста, выберите раздел.</div>}/>
                            <Route path='/profile' component={AppProfileForm}/>
                            <Route path='/account' component={AppAccount}/>
                            <Route path='/plans' component={AppPlans}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}


// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false,
//             view: false
//         };
//         this.OnActive = this.OnActive.bind(this);
//     }

//     OnActive(e) {
//         this.setState(({active}) => ({
//             active: !active
//         }))
//     }
//     render() {
//         const {active} = this.state;
//         let classNames = "hamburger__span";
//         let classView = "left__side";
//         if(active) {
//             classNames +=' hamburger__span__active'
//             classView +=' left__side__active'
//         }

//         return(
//             <Router>
//                 <div className="app">
//                     <AppHeader/>
//                     <div className="container__main">
//                     <div onClick={this.OnActive} className="hamburger">
//                         <span className={classNames}></span>
//                         <span className={classNames}></span>
//                         <span className={classNames}></span>
//                     </div>
//                         <div className={classView}>
//                             <AppMenu/>
                            
//                         </div>
//                         <div className="right__side">
//                             <AppTabs/>
//                             <Route path='/' exact component={() => <div className="hello">Приветствуем! Пожалуйста, выберите раздел.</div>}/>
//                             <Route path='/profile' component={AppProfileForm}/>
//                             <Route path='/account' component={AppAccount}/>
//                             <Route path='/plans' component={AppPlans}/>
//                         </div>
//                     </div>
//                 </div>
//             </Router>
//         )
//     }
// }

// const App = () => {
//     return(
//         <Router>
//             <div className="app">
//                 <AppHeader/>
//                 <div className="container__main">
//                     <div className="left__side">
//                         <AppMenu/>
//                             <div className="hamburger">
//                                 <span className={classNames}></span>
//                                 <span className={classNames}></span>
//                                 <span className={classNames}></span>
//                             </div>
//                     </div>
//                     <div className="right__side">
//                         <AppTabs/>
//                         <Route path='/' exact component={() => <div className="hello">Приветствуем! Пожалуйста, выберите раздел.</div>}/>
//                         <Route path='/profile' component={AppProfileForm}/>
//                         <Route path='/account' component={AppAccount}/>
//                         <Route path='/plans' component={AppPlans}/>
//                     </div>
//                 </div>
//             </div>
//         </Router>
//     )
// }

// export default App;