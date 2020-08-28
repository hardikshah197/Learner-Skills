import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, ButtonDropdown} from 'reactstrap';
import {NavLink } from 'react-router-dom';    

class Header extends Component {
    constructor(props) {
        var cot = false;
        super(props);
        this.state = {
            isNavOpen: false,
            cot:false
        }
        this.handleNavBar = this.handleNavBar.bind(this);
        this.handleCount = this.handleCount.bind(this);
    }
    handleNavBar() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    handleCount(){
        this.setState({
            cot : !this.state.cot
        });
    }
    
    render() {
        return(
            <React.Fragment>
                <div  style={{background:"#92BBFF"}}>
                <Navbar dark expand="md" class="bg-primary">
                    <NavbarToggler class="bg-primary" onClick = {this.handleNavBar} />
                    <NavbarBrand className="mr-auto text-primary" href="/">
                        {/* <img src="assert/images/logo.jpg" widht="30" height = "30" alt="Skills Learner" /> */}
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar class="mt-3">
                            <NavItem>
                                <NavLink className="mr-2 nav-link" style={{color:"#000D7F"}} to="/home" >
                                    {/* <span className="fa fa-home fa-lg"></span> Home */}
                                    Institute
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="mr-2 nav-link" style={{color:"#000D7F"}} to="/Certificate" >
                                    {/* <span className="fa fa-list fa-lg"></span> Certificates */}
                                    Certificates
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="mr-2 nav-link"  style={{color:"#000D7F"}} to="/contactus" >
                                    {/* <span className="fa fa-address-card fa-lg"></span> Contact Us */}
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <input type="search" placeholder="Search..." style={{border:"0.8px solid grey"}} />
                    <NavLink className="nav-link text-primary" to="/Login" >
                        <Button className="ml-5 bg-secondary"  onClick={this.handleCount}>Login</Button>
                    </NavLink>
                </Navbar>
                </div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Skills Learner Hub</h1>
                                <p>We dadk ajdbakdkandfk jsandfla askdnlkas lkasndkas lm dknakd a, dkandfma akdnl;ad kdnka dknakd a!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header;