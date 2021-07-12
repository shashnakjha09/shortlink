import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import Home from "./components/Home";
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



