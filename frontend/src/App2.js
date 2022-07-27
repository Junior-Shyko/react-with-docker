import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Teams } from "./components/Teams";
import {Create} from "./components/Teams/Create"
import {Edit} from "./components/Teams/Edit"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App2() {
  return (
    <div>
      <Navbar />
      
      <div style={{ background: "#F7F7F9" }}>
        <div
          className="container"
          style={{ background: "#FFFFFF", marginTop: "0px" }}
        >
         <Router>
            <Switch>
              <Route exact path="/" component={Teams} />               
              <Route path="/editar-turma/:id" component={Edit} />
              <Route path="/criar-usuario/:id/nome-turma/:turma" component={Create} />
            </Switch>
         </Router>
        </div>
      </div>
    </div>
  );
}

export default App2;
