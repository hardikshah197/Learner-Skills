import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Siddle from './SideNavComponent';
import Certificate from './CertificateComponent';
import Web from './WebComponent';
import Contact from './ContactComponent';
import { Switch, Route,Redirect, withRouter } from 'react-router-dom';

function Main(props) {
        return(
            <div>
            <Header />
            <Siddle />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/certificate" component={Certificate} />
                <Route exact path="/Web" component={Web} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/login" />
            </Switch>
            <Footer />
            </div>
        );
    }
export default withRouter(Main);