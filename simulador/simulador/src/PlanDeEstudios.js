import React, { useState, useEffect } from 'react';
import './PlanDeEstudios.css';
import { simulacion } from './simulacion';
const Materia = ({ materia, toggleAprobado }) => (
  <div className={`materia ${materia.estado ? 'aprobada' : ''}`}>
    <input
      type="checkbox"
      checked={materia.estado}
      onChange={() => toggleAprobado(materia.codigo)}
    />
    <p><strong>{materia.nombre}</strong></p>
    <p>Código: {materia.codigo}</p>
    <p>Créditos: {materia.creditos}</p>
  </div>
);

const PlanDeEstudios = () => {
  const [materias, setMaterias] = useState([]);
  const [resultadoSimulacion, setResultadoSimulacion] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const inicializarEstado = data.map(materia => ({
          ...materia,
          estado: false
        }));
        setMaterias(inicializarEstado);
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const toggleAprobado = (codigo) => {
    setMaterias(materias.map((m) =>
      m.codigo === codigo ? { ...m, estado: !m.estado } : m
    ));
  };

  const handleSimulacion = () => {
    // Filtrar las materias seleccionadas (estado: true)
    const materiasSeleccionadas = materias.filter(materia => !materia.estado);
    
    // Llamar a la función simulacion pasando las materias seleccionadas
    const resultado = simulacion(materiasSeleccionadas);
    setResultadoSimulacion(resultado);  // Guardar el resultado en el estado
  };

  // Agrupar materias por nivel
  const niveles = materias.reduce((acc, materia) => {
    acc[materia.nivel] = acc[materia.nivel] || [];
    acc[materia.nivel].push(materia);
    return acc;
  }, {});

  return (
    <div>
        <button onClick={handleSimulacion} className="boton">
          Simular Avance
        </button>
        {resultadoSimulacion && (
        <div>
          <h2>Resultado de la Simulación</h2>
          <p>Créditos Homologados: {resultadoSimulacion.creditosHomologados}</p>
          <p>Créditos Perdidos: {resultadoSimulacion.creditosPerdidos}</p>
          <p>Porcentaje de Avance: {resultadoSimulacion.porcentajeAvance}%</p>
          <p>Semestres Restantes: {Math.ceil(resultadoSimulacion.semestresRestantes)}</p>
          <p>Requisito de Segunda Lengua: {resultadoSimulacion.requisitoSegundaLengua} créditos</p>
        </div>
      )}
      <div className="plan-de-estudios">
        {Object.keys(niveles).map((nivel) => (
          <div key={nivel} className="nivel-columna">
            <h3>Nivel {nivel}</h3>
            {niveles[nivel].map((materia) => (
              <Materia key={materia.codigo} materia={materia} toggleAprobado={toggleAprobado} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanDeEstudios;
