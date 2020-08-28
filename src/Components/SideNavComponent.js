import React, { useState } from 'react';
import { NavItem, NavbarToggler, Dropdown, DropdownItem, Nav} from 'reactstrap';
import { SideNav, SideNavBody, MenuIcon, MenuHeading } from 'react-simple-sidenav'; 
import {NavLink} from 'react-router-dom';

// class SideNavOpen extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isSelectOpen: true,
//             activeKey: 1
//         }
//         this.handleSide = this.handleSide.bind(this);
//         this.handleSelect = this.handleSide.bind(this);
//     }

//     handleSide(){
//         this.setState({
//             isSelectOpen: !this.isSelectOpen
//         })
//     }

//     handleSelect(eventSelect){
//         this.setState({
//             activeKey : eventSelect
//         })
//     }
function Siddle(props) {
    const [ showNav, setShowNav ] = useState(true);

    const navitems = [
        <NavLink target="_blank" to="/Web">
            Machine Learning
        </NavLink>,
        <NavLink target="_blank" to="/Web">
            Web Development
        </NavLink>,
        <NavLink target="_blank" to="#">
            Android
        </NavLink>
    ]
    const navTitle = <h3>Skills List</h3>

    return(
        <div style={{width:"auto"}}>
            <div class="d-flex">
              <MenuIcon onClick={() => setShowNav(!showNav)} class="ml-5 bg-primary" />
              <h3 class="ml-3">Skills</h3>
            </div>
            <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={navTitle} titleStyle={{background: "#067BFF"}} items={navitems}/>
        </div>
    );
}
export default Siddle;