import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';


class App2 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-muted" style={{textAlign: 'center'}}>Todas as turmas</h1>
        <div style={{background: '#F7F7F9'}}>
          
          <div className="container"  style={{background: '#FFFFFF', marginTop: '0px'}}>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" className="btn btn-primary  btn-sm" 
                    style={{margin: '10px'}}>Add Usuario</button>
                    <button type="button" className="btn btn-secondary  btn-sm" 
                    style={{margin: '10px'}}>Add Usuario</button>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App2;
