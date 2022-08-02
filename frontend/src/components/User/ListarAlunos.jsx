import React, { useEffect, useState, useRef } from "react";
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

  const [idDelete, setIdDelete] = useState([]);
  const [show, setShow] = useState(false);
  
  const $ = require('jquery');
  $.DataTable = require('datatables.net');
  const tableRef = useRef();

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
    const table = $(tableRef.current).DataTable(
      {
        ajax: 'http://localhost:5000/api/v1/aluno/todos-alunos',
        columns: [
            { data: 'name' , name: "Nome"},
            {  data: 'email' , name: "Email"},
            {  data: 'phone' , name: "Fone"},
            {  data: 'genre' , name: "Genero."},
            {  data: 'birthday' , name: "Data Nasc."},
            {  data: 'action', name: 'action', orderable: false, searchable: false}
        ],
        destroy: true  // I think some clean up is happening here
      }
  )
    // return function() {
    //     console.log("Table destroyed")
    //     table.destroy()
    // }
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
        <Table className="display" width="100%" ref={ tableRef } striped bordered hover size="sm" responsive>
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
