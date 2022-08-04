import React, { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/Api";
import Swal from "sweetalert2";
import { Link, useRouteMatch } from "react-router-dom";

export const Edit = () => {
  const [idTeam, setIdTeam] = useState("");
  const [nameTeam, setNameTeam] = useState("");
  const [yearTeam, setYearTeam] = useState("");
  const [levelTeam, setLevelTeam] = useState("");
  const [seriesTeam, setSeriesTeam] = useState("");
  const [periodTeam, setPeriodTeam] = useState("");

  let { url } = useRouteMatch();

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setIdTeam(response.data.id);
        setNameTeam(response.data.name);
        setYearTeam(response.data.year);
        setLevelTeam(response.data.level);
        setSeriesTeam(response.data.series);
        setPeriodTeam(response.data.period);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const editTime = () => {
    let data = {
      id: idTeam,
      name: nameTeam,
      year: yearTeam,
      level: levelTeam,
      series: seriesTeam,
      period: periodTeam,
    };
   
    api
      .patch("/alterar-turmas", data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div className="" style={{ marinTop: "10px", paddingTop: "20px" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group col">
            <label>Nome da Turma</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setNameTeam(e.target.value)}
              className="form-control"
              value={nameTeam}
            />
          </div>
          <div className="form-group col">
            <label>Ano vigência</label>
            <select
              onChange={(e) => setYearTeam(e.target.value)}
              className="form-control"
              value={yearTeam}
            >
              <option value="0">--Selecione--</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Nível</label>
            <select
              onChange={(e) => setLevelTeam(e.target.value)}
              className="form-control"
              value={levelTeam}
            >
              <option value="0">--Selecione--</option>
              <option value="Difícil">Difícil</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Fácil">Fácil</option>
            </select>
          </div>
          <div className="form-group col">
            <label>Série</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setSeriesTeam(e.target.value)}
              value={seriesTeam}
            />
          </div>
          <div className="form-group col">
            <label>Turno</label>
            <select
              onChange={(e) => setPeriodTeam(e.target.value)}
              className="form-control"
              value={periodTeam}
            >
              <option value="0">--Selecione--</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <button
              type="button"
              onClick={editTime}
              className="btn btn-primary float-right"
            >
              Alterar turma
            </button>
            <button
            className="btn btn-light float-left">
             <Link to={'/'}>Voltar</Link>
           
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
