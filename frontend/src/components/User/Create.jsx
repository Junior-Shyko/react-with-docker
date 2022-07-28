import React, { useState } from 'react';
import {api} from "../../services/Api";
import Swal from 'sweetalert2'
import { Link, useParams, useRouteMatch } from "react-router-dom";


export const CreateUser = () => {
    return (
        <div>
            <div className="row">
                <h1>Criar alunos</h1>
            </div>
            <div className="row">
                <div className="container">
                <form>
                    <div class="row">
                        <div className="col form-group">
                            <label for="">Nome Completo</label>
                            <input type="text" className="form-control" placeholder="Ex: João da Silva" />
                        </div>
                        <div className="col form-group">
                            <label for="">E-mail</label>
                            <input type="text" className="form-control" placeholder="Ex: joao@mail.com" />
                        </div>
                    </div>
                    <div class="row">
                        <div className="col form-group">
                            <label for="">Telefone</label>
                            <input type="text" className="form-control" placeholder="Ex: (99) 99999-9999" />
                        </div>
                        <div className="col form-group">
                            <label for="">Gênero</label>
                            <select name="" id=""  className="form-control" >
                                <option value="0">--Selecione--</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="">Data de Nascimento</label>
                            <input type="text" className="form-control" placeholder="Ex: 01/01/1990" />
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};