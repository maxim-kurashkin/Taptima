import App from './app';
export default App;

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