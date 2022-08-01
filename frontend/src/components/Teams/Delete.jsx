import React from "react";
import {api} from "../../services/Api";
import Swal from 'sweetalert2'

export default (props) =>{

    async function deleteTurma(id){
        api.delete("/excluir-turmas/"+id)
        .then((response) => {
            Swal.fire({
                title: 'Sucesso',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        })
        .catch((err) => {
            Swal.fire({
                title: 'Ops!',
                text: err.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        })
    }

    return (
        <div>
            <button type="button" className="btn btn-danger  btn-sm" 
            style={{margin: '10px'}} title="Excluir Turma"
            onClick={() => deleteTurma(props.id)}>Excluir</button>
        </div>
    )

}