import React, { useEffect, useState } from "react";
import { api } from "../../services/Api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

export const ListarAlunos = () => {
    const [studenty, setStudent] = useState([]);

    useEffect(() => {
        api.get('aluno/todos-alunos')
        .then(response => {
            console.log(response.data)
            setStudent(response.data);
        })
        .catch(error => {

        });
    }, []);    

  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h3>Lista de Alunos</h3>
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
                <Button variant="secondary" size="sm">Alterar</Button>{' '}
                <Button variant="danger" size="sm">Excluir</Button>{' '}
                </td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
