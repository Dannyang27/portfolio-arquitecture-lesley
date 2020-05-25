import React, {useState} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router';
import Render from "./components/renders/Render";
import './App.css';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo.png"

const App = () => {

    const currentLocation = window.location.pathname
    let currentLocationId = 0;

    switch (currentLocation) {
        case "/":
            currentLocationId = 0;
            break;
        case "/about":
            currentLocationId = 1;
            break;
        case "/contact":
            currentLocationId = 2;
            break;
        default:
            currentLocationId = 0;
    }

    const [linkId, setLinkId] = useState(currentLocationId);

    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <div className="flex-container">
                                <div>
                                    <img src={logo} className="logo-img"/>
                                </div>
                                <div>
                                    <span className="brand-name helvetica-regular size-large">
                                        Weil Visual
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </nav>

                <nav className="navbar navbar-top-margin">
                    <div>
                        <ul className="navbar-nav">
                            <li>
                                <Link to="/" className="link" onClick={() => setLinkId(0)}>
                                    <h3 className="helvetica-light size-medium light-grey link-hover"
                                        style={linkId === 0 ? {color: "black"} : {}}>Renders</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setLinkId(1)}>
                                    <h3 className="helvetica-light size-medium light-grey link-hover"
                                        style={linkId === 1 ? {color: "black"} : {}}>About</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => setLinkId(2)}>
                                    <h3 className="helvetica-light size-medium light-grey link-hover"
                                        style={linkId === 2 ? {color: "black"} : {}}>Contact</h3>
                                </Link>
                            </li>
                        </ul>

                        <div className="my-footer helvetica-light size-medium light-grey footer-container">
                            <p>&#169; Wei Lesley</p>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Render/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
