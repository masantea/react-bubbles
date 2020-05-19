import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
   
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute exact path = "/protected" Component = {BubblePage}/>
        
        <Route exact path="/" render= {(props) =><Login {...props}/>}/>
        <Route component={Login} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
