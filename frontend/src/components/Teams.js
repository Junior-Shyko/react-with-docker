import React, { useEffect, useState } from "react";
import {api} from "../services/Api";
import DeleteTurma from "./Teams/Delete";
import {Edit}  from './Teams/Edit'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

export const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    api
      .get("/todas-turmas")
      .then((response) => {
        setTeam(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="header">
      <h1 className="text-muted" style={{ textAlign: "center" }}>
        Todas as turmas
      </h1>
      <table className="table table-bordered table-striped ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nome</th>
            <th scope="col">Ano Vigênte</th>
            <th scope="col">Nível</th>
            <th scope="col">Série</th>
            <th scope="col">Turno</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {team.map((teams) => (
            <tr key={teams.id}>
              <td>{teams.id}</td>
              <td>{teams.name}</td>
              <td>{teams.year}</td>
              <td>{teams.level}</td>
              <td>{teams.series}</td>
              <td>{teams.period}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light  btn-sm"
                  style={{ margin: "10px" }}
                >
                  Add Usuario
                </button>
                  <button className="btn btn-light btn-sm">
                  <Link to={'/editar-turma/'+teams.id}>Editar</Link>
                  </button>
                  <Router>
                  <Switch>
                    <Route path="/:id" children={<Edit id={teams.id} />} />
                  </Switch>
                  </Router>

              
                {/* <ShowModal show={modalShow} id={teams.id} onHide={() => setModalShow(false)} /> */}
                <DeleteTurma id={teams.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
