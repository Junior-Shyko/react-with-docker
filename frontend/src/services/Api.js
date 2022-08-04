import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
});

//Para saber informações sobre o usuario
export async function getUserData(){
    //Obtendo o token na sessão
    const token = window.sessionStorage.getItem('user');
    //Gerando objeto para enviar na requisição
    let obj = {
    token_access: token
    };
    const response = await axios.post("http://localhost:5000/api/v1/aluno/getUser", obj,{
        headers: {
        'Authorization': `bearer ${token}`
        }
    })
    return await response;
}