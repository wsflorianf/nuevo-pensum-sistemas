import React, { useState, useEffect } from 'react';
import './PlanDeEstudios.css';

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
    setMaterias((prevMaterias) => {
      const nuevasMaterias = prevMaterias.map((m) =>
        m.codigo === codigo ? { ...m, estado: !m.estado } : m
      );
  
      // Agregar console.log para ver el cambio de estado
      console.log("Estado de materias actualizado:", nuevasMaterias);
      return nuevasMaterias;
    });
  };

  // Agrupar materias por nivel
  const niveles = materias.reduce((acc, materia) => {
    acc[materia.nivel] = acc[materia.nivel] || [];
    acc[materia.nivel].push(materia);
    return acc;
  }, {});

  return (
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
  );
};

export default PlanDeEstudios;
