import React, { useState } from 'react';
import {api} from "../../services/Api";
import Swal from 'sweetalert2'
// import { Link, useParams, useRouteMatch } from "react-router-dom";


export const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [genre, setGenre] = useState('');
    const [birth, setBirth] = useState('');

    const createStudent = () => {
        console.log(name);
        let data = {
          name: name,
          email: email,
          phone: phone,
          genre: genre,
          birth: birth
        }
        api
          .post("/aluno/criar-aluno", data)
          .then((response) => {
            console.log(response.data);
            Swal.fire({
              title: 'Sucesso',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'OK'
            });
            cancelForm();
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        
    }

    const cancelForm = () => { 
        document.getElementById("form-create-student").reset();
    }

    return (
        <div>
            <div className="row">
                <h1>Criar alunos</h1>
            </div>
            <div className="row">
                <div className="container">
                <form onSubmit={e => e.preventDefault()} id="form-create-student"> 
                    <div className="row">
                        <div className="col form-group">
                            <label>Nome Completo</label>
                            <input type="text" 
                            onChange={(e) => setName(e.target.value)}
                            className="form-control" placeholder="Ex: João da Silva" />
                        </div>
                        <div className="col form-group">
                            <label>E-mail</label>
                            <input type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" placeholder="Ex: joao@mail.com" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label>Telefone</label>
                            <input type="text" 
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control" placeholder="Ex: (99) 99999-9999" />
                        </div>
                        <div className="col form-group">
                            <label>Gênero</label>
                            <select name="" id="" 
                            onChange={(e) => setGenre(e.target.value)}
                            className="form-control" >
                                <option value="0">--Selecione--</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label  >Data de Nascimento</label>
                            <input type="text"
                            onChange={(e) => setBirth(e.target.value)}
                            className="form-control" placeholder="Ex: 01/01/1990" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-body" 
                            style={{
                                border: '1px solid #c3c3c3', 
                                borderRadius: '8px', 
                                margin: '8px'
                            }}
                        >
                        <button
                        onClick={createStudent}
                        className="btn btn-primary float-right">Salvar Aluno
                        </button>
                        <a href="listar-usuarios"
                        className="btn btn-light float-left">Voltar
                        </a>
                        </div>
                        
                       
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};