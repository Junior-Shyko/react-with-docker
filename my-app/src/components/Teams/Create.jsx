import React, { useState } from "react";
import api from "../../services/Api";
import Swal from 'sweetalert2'

export const Create = () => {
    const [nameTeam, setNameTeam] = useState('');
    const [yearTeam, setYearTeam] = useState('');
    const [levelTeam, setLevelTeam] = useState('');
    const [seriesTeam, setSeriesTeam] = useState('');
    const [periodTeam, setPeriodTeam] = useState('');
    
    const postData = () => {
        //console.log(firstName);
        let data = {
          name: nameTeam,
          year: yearTeam,
          level: levelTeam,
          series: seriesTeam,
          period: periodTeam,
        }
        api
          .post("/criar-turmas", data)
          .then((response) => {
            console.log(response.data);
            Swal.fire({
              title: 'Sucesso',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'OK'
            })
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        
    }
    
    return (
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
          <label>Cadastrar Turma</label>
          </div>
        <div className="row">
          <div className="form-row">
            <div className="col">
              <label>
                Nome:
                <input type="text" name="name" className="form-control"
                 onChange={(e) => setNameTeam(e.target.value)} />
              </label>
            </div>
            <div className="col">
              <label>
                Ano Vig.
                <select onChange={(e) => setYearTeam(e.target.value)} className="form-control">
                  <option value="0">--Selecione--</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </label>
            </div>
            <div className="col">
              <label>
                Nivel:
                <select onChange={(e) => setLevelTeam(e.target.value)} className="form-control">
                  <option value="0">--Selecione--</option>
                  <option value="Difícil">Difícil</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Fácil">Fácil</option>
                </select>
              </label>
            </div>
            <div className="col">
              <label>
                Série:
                <input type="text" name="name" className="form-control"
                 onChange={(e) => setSeriesTeam(e.target.value)} />
              </label>
            </div>
            <div className="col">
              <label>
                Turno:
                <select onChange={(e) => setPeriodTeam(e.target.value)} className="form-control">
                  <option value="0">--Selecione--</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>.</label>
              <button onClick={postData} className="btn btn-success btn-block">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>
    )
}

