import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Effects from './Effects';
import MouseTracker from './Mouse';



export default function App() {
  return (
    <Router>
      <div>
      <Menu />
      <Switch>
        <Route path="/effects">
          <Effects />
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
