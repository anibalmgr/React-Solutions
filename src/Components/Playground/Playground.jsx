import AppearOnScroll from './AppearOnScroll';
import {
  Switch,
  Route,
} from "react-router-dom";
import Scrollers from './Scrollers';
import MouseTracker from './Mouse';
import Menu from './Menu';
import Home from './Home';


function Playground(){
  return (
    <div>
    <Menu />
    <Switch>
      <Route path="/scrollers">
        <Scrollers />
      </Route>
      <Route path="/mouse">
        <MouseTracker />
      </Route>
      <Route path="/appearonscroll">
        <AppearOnScroll />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
  )
}

export default Playground;
