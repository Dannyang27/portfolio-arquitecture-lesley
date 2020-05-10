import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router';
import Render from "./components/renders/Render";
import './App.css';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo.png"

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar red-background">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="logo-img"/>
                            <h4 className="brand-name helvetica-regular size-large">
                                Weil Visual
                            </h4>
                        </a>
                    </div>
                </nav>

                <nav className="navbar navbar-top-margin">
                    <div>
                        <ul class="navbar-nav">
                            <li>
                                <Link to="/">
                                    <h3 className="helvetica-regular size-medium light-grey">Renders</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <h3 className="helvetica-light size-medium light-grey">About</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <h3 className="helvetica-light size-medium light-grey">Contact</h3>
                                </Link>
                            </li>
                        </ul>
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

                <div className="my-footer helvetica-light size-medium light-grey">
                    <p>&#169; Wei Lesley</p>
                </div>
            </div>
        </Router>
    );
}

export default App;
