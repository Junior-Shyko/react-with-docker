import React, { useEffect, useState } from "react";
import api from "../services/Api";
import DeleteTurma from "./Teams/Delete";

export const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    api
      .get("/todas-turmas")
      .then((response) => {
        console.log(response.data);
        setTeam(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="header">
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
                  className="btn btn-secondary  btn-sm"
                  style={{ margin: "10px" }}
                >
                  Add Usuario
                </button>
                <button
                  type="button"
                  className="btn btn-secondary  btn-sm"
                  style={{ margin: "10px" }}
                  title="Editar Turma"
                >
                  Editar
                </button>
                <DeleteTurma id={teams.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
