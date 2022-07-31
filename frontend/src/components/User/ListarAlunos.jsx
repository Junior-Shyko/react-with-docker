import React, { useEffect, useState } from "react";
import { api } from "../../services/Api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

export const ListarAlunos = () => {
  const [studenty, setStudent] = useState([]);
  const [idDelete, setIdDelete] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    console.log({ id });
    setIdDelete(id);
    setShow(true);
  };

  useEffect(() => {
    listAlunos();
  }, []);

  const listAlunos = () => {
    api
      .get("aluno/todos-alunos")
      .then((response) => {
        console.log(response.data);
        setStudent(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const deleteAluno = (id) => {
    api
      .delete("aluno/excluir-aluno/" + id)
      .then((response) => {
        listAlunos();
        setShow(false);
        Swal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: response.data.type,
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <Container>
      <Row className="text-center">
        <Col md={10}>
          <h3>Lista de Alunos</h3>
        </Col>
        <Col md={2}>
          <div className="form-group">
            <a
              href={"criar-aluno"}
              className="btn btn-light"
              style={{ marginTop: "5px" }}
              variant="secondary"
              size="sm"
            >
              {" "}
              Criar Aluno{" "}
            </a>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Fone</th>
              <th>Genero</th>
              <th>Data nasc.</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {studenty.map((students) => (
              <tr key={students.id}>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.phone}</td>
                <td>{students.genre}</td>
                <td>{students.birthday}</td>
                <td>
                  <Button variant="secondary" size="sm">
                    Alterar
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleShow(students.id)}
                  >
                    Excluir
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Exclur Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja realmente excluir esse aluno?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="pull-left"
            onClick={handleClose}
          >
            Sair
          </Button>
          <Button variant="danger" onClick={() => deleteAluno(idDelete)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
