import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarHeader } from "./components/NavbarHeader";
import { Teams } from "./components/Teams";
import {Create} from "./components/Teams/Create"
import {Edit} from "./components/Teams/Edit"
import { CreateUser } from "./components/User/Create"
import { ListarAlunos } from "./components/User/ListarAlunos"
import { EditStudent } from "./components/User/EditStudent"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App2() {
  return (
    <div>
      <NavbarHeader />
      
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
              <Route path="/listar-usuarios/" component={ListarAlunos} />
              <Route path="/criar-aluno/" component={CreateUser} />
              <Route path="/alterar-aluno/:id" component={EditStudent} />
            </Switch>
         </Router>
        </div>
      </div>
    </div>
  );
}

export default App2;
