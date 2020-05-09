import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <h2>test</h2>
            </Route>
            <Route path="/users">
              <h3>Test 2</h3>
            </Route>
            <Route path="/">
              <h3>test3</h3>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
