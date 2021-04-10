import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Components/Menu';
import Home from './Components/Home';
import Scrollers from './Components/Scrollers';
import MouseTracker from './Components/Mouse';
import './index.css';



export default function App() {
  return (
    <Router>
      <div>
      <Menu />
      <Switch>
        <Route path="/scrollers">
          <Scrollers />
        </Route>
        <Route path="/mouse">
          <MouseTracker />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
