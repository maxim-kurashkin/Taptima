import React from 'react';
import {Link} from 'react-router-dom';
import './app-tabs.css';

const AppTabs = () => {
  return(
    <div className="tabs">
      <div className="tabs__items">
          <Link to='/profile' className="tabs__item">Profile</Link>
          <Link to='/account' className="tabs__item">Account</Link>
          <Link to='/plans' className="tabs__item">Price Plans</Link>
      </div>
    </div>
  )
}

export default AppTabs;


// const Tabs = [
//     { name: "Profile", zip: "1"},
//     { name: "Account", zip: "2" },
//     { name: "Price Plans", zip: "3" }
//   ];
  
//   class AppProfileContent extends Component {
//     render() {
//       return (
//           <div>
//               {this.props.zip}
//           </div>
//         );
//     }
//   }

//   class AppTabs extends Component {
//     constructor() {
//       super();
//       this.state = {
//         activeTab: 0
//       };
//     }
//     render() {
//       const activeTab = this.state.activeTab;
//       return (
//         <div className="container__tabs">
//           {Tabs.map((tab, index) => (
//               <label className="tabs__item"key={index}
//               onClick={() => {
//                 this.setState({ activeTab: index });
//               }}>{tab.name}</label>
//           ))}
//           <AppProfileContent key={activeTab} zip={Tabs[activeTab].zip} />
//         </div>
//       );
//     }
//   }
// export default AppTabs;


