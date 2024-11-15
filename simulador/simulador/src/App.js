import React from 'react';
import PlanDeEstudios from './PlanDeEstudios';
import './PlanDeEstudios.css';

function App() {
  return (
    <div className="App">
      <h1>Plan de Estudios Antiguo</h1>
      <h2>Escoja las materias que ya ha aprobado haciendo click sobre ellas,<br></br> o haga click sobre el nivel 
        correspondiente para seleccionar todas <br></br>las materias de ese nivel</h2>
      <PlanDeEstudios />
    </div>
  );
}

export default App;
