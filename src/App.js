import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router';
import Render from "./components/renders/Render";
import './App.css';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./components/renders/images/logo.png"

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar red-background">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="logo-img"/>
                            <h4 className="brand-name">
                                Weil Visual
                            </h4>
                        </a>
                    </div>
                </nav>

                <nav className="navbar navbar-top-margin">
                    <div>
                        <ul class="navbar-nav">
                            <li>
                                <Link to="/">Renders</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
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

                <div className="my-footer">
                    <p>&#169; Wei Lesley</p>
                </div>
            </div>
        </Router>
    );
}

export default App;
