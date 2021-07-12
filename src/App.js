import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";

import Home from "./components/Home";
import Features from "./components/features"
import Navbarmain from "./components/Navbar"
function App() {

  return (<Router>
        <>
             <Navbarmain/>
             <Home />
        </>
  </Router>);
}

export default App;



