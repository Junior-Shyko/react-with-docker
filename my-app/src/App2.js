import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Teams }  from './components/Teams';


function App2() {
  
    return (
      <div>
        <Navbar />
        <h1 className="text-muted" style={{textAlign: 'center'}}>Todas as turmas</h1>
        <div style={{background: '#F7F7F9'}}>
          
          <div className="container"  style={{background: '#FFFFFF', marginTop: '0px'}}>
          <Teams />
          </div>
        </div>
      </div>
    );
}

export default App2;