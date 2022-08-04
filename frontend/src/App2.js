import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Teams } from "./components/Teams";
import { CreateTeams } from "./components/Teams/CreateTeams"
import { Edit } from "./components/Teams/Edit"
import { CreateUser } from "./components/User/Create"
import { ListarAlunos } from "./components/User/ListarAlunos"
import { EditStudent } from "./components/User/EditStudent"
import  Login from "./components/layout/Auth/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App2() {
  return (
    <div>
         <Router>
            <Switch>
              <Route exact path="/" component={Login} />               
              <Route path="/editar-turma/:id" component={Edit} />
              <Route path="/criar-usuario/:id/turma" component={CreateTeams} />
              <Route path="/listar-usuarios/" component={ListarAlunos} />
              <Route path="/criar-aluno/" component={CreateUser} />
              <Route path="/alterar-aluno/:id" component={EditStudent} />
              <Route path="/turmas" component={Teams} />
            </Switch>
         </Router>
    </div>
  );
}

export default App2;
