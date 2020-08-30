/* jshint esversion: 6 */

import React, { Component } from "react";
import "./App.css";
      // Import Layouts      
import Navbar from "./component/Layout/Navbar";
import Menu from './component/Layout/Menu';
import Footer from "./component/Layout/Footer";
     // React Router Import
import { Switch , Route } from 'react-router-dom';
    // Import Pages
import LandingPage from  './component/pages/LandingPage';
import Blog from './component/pages/Blog';
import Recipe from './component/pages/Recipe';
// import NotFoundPage from './component/pages/NotFoundPage';
import Order from './component/pages/Order';
import Contact from './component/pages/Contact';
import Service from './component/pages/Service';
import ReturnPolicy from './component/pages/ReturnPolicy';

class App extends Component { 
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/recipe" component={Recipe} />                    {/* <Route path="/recipe" component={Recipe} /> */}
                    <Route path="/order" component={Order} /> 
                    <Route path="/contact" component={Contact} />
                    <Route path="/service" component={Service} />
                    {/* <Route component={NotFoundPage} /> */}
                    <Route path="/returnpolicy" component={ReturnPolicy} />
                </Switch>
                <Menu />
                <Footer />
            </div>
        );
    };
};


export default App;