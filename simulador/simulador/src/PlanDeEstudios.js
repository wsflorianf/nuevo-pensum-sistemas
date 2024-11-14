import React, { useState, useEffect } from 'react';
import './PlanDeEstudios.css';  // Importa los estilos

const Materia = ({ materia, toggleAprobado }) => (
  <div className={`materia ${materia.estado ? 'aprobada' : ''}`}>
    <input
      type="checkbox"
      checked={materia.estado}
      onChange={() => toggleAprobado(materia.codigo)}
    />
    <p><strong>{materia.nombre}</strong></p>
    <p>Nivel: {materia.nivel}</p>
    <p>Código: {materia.codigo}</p>
    <p>Créditos: {materia.creditos}</p>
  </div>
);

const PlanDeEstudios = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    // Carga el archivo JSON desde la carpeta public
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Agrega el campo "estado" a cada elemento si no existe
        const inicializarEstado = data.map(materia => ({
          ...materia,
          estado: false // Añade "estado" con valor inicial "false"
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

  return (
    <div className="plan-de-estudios">
      {materias.map((materia) => (
        <Materia key={materia.codigo} materia={materia} toggleAprobado={toggleAprobado} />
      ))}
    </div>
  );
};

export default PlanDeEstudios;
