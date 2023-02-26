
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import List from "./component/pages/home";

import Navbar from "./component/layout/navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import AddColor from "./component/users/addColor";
import EditColor from "./component/users/editColor";
import SpecificColorList from "./component/users/specificList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={List} />
         
          <Route exact path="/users/add" component={AddColor} />
          <Route exact path="/users/edit/:id" component={EditColor} />
          <Route exact path="/users/:id" component={SpecificColorList} />
      
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;