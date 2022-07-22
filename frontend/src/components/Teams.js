import React, { useEffect, useState } from "react";
import api from "../services/Api";
import DeleteTurma from "./Teams/Delete";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Teams = () => {
  const [team, setTeam] = useState([]);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setShow(false);

 
  function ShowModal(props, team) {
   console.log(props)
   console.log(team)

    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading {props.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setModalShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  } ;

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
                  onClick={() => setModalShow(true)}
                >
                  Editar
                </button>
                <ShowModal show={modalShow}  onHide={() => setModalShow(false)} />
                <DeleteTurma id={teams.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
