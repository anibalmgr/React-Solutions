import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from './Components/Header';
import Playground from './Components/Playground';


// Styles
import './index.css';



export default function App() {
  return (
    <Router>
      <Header />
      <Playground />
    </Router>
  );
}
