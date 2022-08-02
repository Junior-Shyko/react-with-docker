import React, { useState } from "react";
import { api } from "../../services/Api";
import Swal from "sweetalert2";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const CreateTeams = () => {
  const [nameTeam, setNameTeam] = useState("");
  const [yearTeam, setYearTeam] = useState("");
  const [levelTeam, setLevelTeam] = useState("");
  const [seriesTeam, setSeriesTeam] = useState("");
  const [periodTeam, setPeriodTeam] = useState("");

  let { id } = useParams();
  let { url } = useRouteMatch();

  const postData = () => {
    //console.log(firstName);
    let data = {
      name: nameTeam,
      year: yearTeam,
      level: levelTeam,
      series: seriesTeam,
      period: periodTeam,
    };
    api
      .post("/criar-turmas", data)
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
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Matemática" 
            onChange={(e) => setNameTeam(e.target.value)} />            
          </Form.Group>
        </Col>
        <Col>          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ano vigênte</Form.Label>
            <select onChange={(e) => setYearTeam(e.target.value)} className="form-control">
              <option value="0">--Selecione--</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </Form.Group>
        </Col>        
      </Row>
      <Row>
      <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nível</Form.Label>
            <select onChange={(e) => setLevelTeam(e.target.value)} className="form-control">
              <option value="0">--Selecione--</option>
              <option value="Difícil">Difícil</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Fácil">Fácil</option>
            </select>            
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Série</Form.Label>
            <Form.Control type="text" placeholder="Matemática" 
            onChange={(e) => setSeriesTeam(e.target.value)}  /> 
          </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Turno</Form.Label>
            <select onChange={(e) => setPeriodTeam(e.target.value)} className="form-control">
            <option value="0">--Selecione--</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
          </Form.Group>
        </Col>
        
      </Row>
      <Row>
        <Col>
        <Button variant="primary" className="float-right"  onClick={postData}>Salvar Turma</Button>
        </Col>
      </Row>
      </Form>
    </Container>
  );
};
