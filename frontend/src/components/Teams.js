import React, { useEffect, useState } from "react";
import api from "../services/Api";
import DeleteTurma from "./Teams/Delete";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Teams = () => {
  const [team, setTeam] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const ShowModal = (id) => {
    setShow(true);
    api.get('editar-turma/' + id)
    .then(response => {
      console.log(response);
      document.getElementById("ModalParagraphEdit").innerHTML = "Nome da Turma: "+response.data.name;
      
    })
    .catch(error => {
      console.log(error);
    })
  };

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
                  onClick={() => ShowModal(teams.id)}
                >
                  Editar {teams.id}
                </button>
              
                {/* <ShowModal show={modalShow} id={teams.id} onHide={() => setModalShow(false)} /> */}
                <DeleteTurma id={teams.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} id="myModal"  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Alterar Turma </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <p id="ModalParagraphEdit"></p>
          <Col md={12}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" name="name" className="form-control" />           
          </div>
          </Col>
          <Col md={12}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" name="name" className="form-control" />           
          </div>
          </Col>

          </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
