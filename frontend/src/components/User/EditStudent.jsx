import React, { useEffect, useState } from "react";
import { api } from "../../services/Api";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const EditStudent = () => {
  let { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [genre, setGenre] = useState('');
    const [birth, setBirth] = useState('');
  
  useEffect(() => {
    api
      .get("aluno/editar-aluno/" + id)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setGenre(response.data.genre);
        setBirth(response.data.birthday);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editStudent = () => {
    let data = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        genre: genre,
        birth: birth
    }
    api.post('aluno/alterar-aluno/', data)
    .then(response => {
        Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: response.data.type,
            confirmButtonText: "OK",
        });
    })
    .catch(err => {

    });
  }

  const excluirAluno = () => {
        console.log('sdfsdf');
  }
  return (
    <Form onSubmit={e => e.preventDefault()} id="form-create-student">
        <Row style={{borderBottom: '1px solid #c3c3c3', margin: '5px'}}>
            <Col>
                <h3>Editar Aluno: <strong className="text-muted">{name}</strong> </h3>
            </Col>
        </Row>
      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Fone</Form.Label>
                <Form.Control required type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Gênero</Form.Label>
                <select
                 onChange={(e) => setGenre(e.target.value)}
                className="form-control"
                value={genre}
                >
                <option value="0">--Selecione--</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                </select>
            </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Data Nascimento</Form.Label>
                <Form.Control required type="text" value={birth} onChange={(e) => setBirth(e.target.value)}/>
            </Form.Group>
        </Col>
        <Col>
           
        </Col>
      </Row>
      <Row style={{
        border: '1px solid #C9C9C9',
        padding: '5px',
        margin: '15px',
        borderRadius: '5px'
        }}>
      
        <Col>
        <a href="/listar-usuarios" className="btn btn-link">Voltar</a>
        </Col>
        <Col>
        <Button onClick={editStudent} variant="primary" style={{float:'right'}} type="submit">
            Alterar Aluno
        </Button>
        </Col>
       
      </Row>
    </Form>
  );
};
