import { useState } from 'react';

// Definición del componente BarraMateriasReact
const BarraMateriasReact = () => {
  // Se crea un estado 'filtroActivo' que indica el filtro actualmente seleccionado. Inicialmente está en 'null'.
  const [filtroActivo, setFiltroActivo] = useState(null);

  // Función para aplicar el filtro al hacer clic en una categoría
  const aplicarFiltro = (tipo) => {
    // Si el filtro actual es el mismo al que se hizo clic, se desactiva; de lo contrario, se activa el nuevo filtro.
    if (filtroActivo === tipo) {
      setFiltroActivo(null);
    } else {
      setFiltroActivo(tipo);
    }

    // Selecciona todos los elementos con la clase 'materia'
    const materias = document.querySelectorAll('.materia');
    
    // Aplica el efecto de opacidad en función del filtro activo
    materias.forEach((materia) => {
      const tipoMateria = materia.getAttribute('data-tipo');
      
      if (filtroActivo === tipo) {
        // Si el filtro se deselecciona, todas las materias son visibles (opacidad 1)
        materia.style.opacity = '1';
      } else {
        // Si hay un filtro activo, se ajusta la opacidad según si la materia corresponde al tipo seleccionado
        materia.style.opacity = tipoMateria === tipo ? '1' : '0.3';
      }
    });
  };

  // Lista de categorías con tipos y nombres, que representa cada filtro
  const categorias = [
    { tipo: 'CO', nombre: 'Complementario' },
    { tipo: 'CB', nombre: 'Ciencias Básicas' },
    { tipo: 'BI', nombre: 'Básicas de Ingeniería' },
    { tipo: 'AI', nombre: 'Aplicadas de Ingeniería' },
    { tipo: 'EX', nombre: 'Extrínsecas' }
  ];

  return (
    <div className="barra-categorias">
      {/* Recorre las categorías y crea un botón para cada una */}
      {categorias.map(({ tipo, nombre }) => (
        <button
          key={tipo} // La clave única para cada botón basado en el tipo
          onClick={() => aplicarFiltro(tipo)} // Llama a aplicarFiltro con el tipo de categoría
          className={`categoria ${tipo} ${filtroActivo === tipo ? 'activo' : ''}`} // Agrega clases condicionales según si el filtro está activo
        >
          {nombre} {/* Texto del botón que corresponde al nombre de la categoría */}
        </button>
      ))}

      {/* Estilos CSS para el diseño y los efectos visuales de los botones y la barra */}
      <style>{`
        .barra-categorias {
          display: flex;
          gap: 10px;
          padding: 10px;
          background-color: #ffffff;
          border-radius: 8px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .categoria {
          padding: 5px 10px;
          color: black;
          font-weight: bold;
          border: 2px solid black;
          border-radius: 5px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .categoria:hover {
          transform: scale(1.05); // Aumenta el tamaño del botón al pasar el cursor
        }

        .categoria.activo {
          box-shadow: 0 0 10px rgba(0,0,0,0.3); // Sombra para indicar el filtro activo
          transform: scale(1.1); // Aumenta el tamaño del botón cuando está activo
        }

        /* Colores de fondo específicos para cada categoría */
        .CO { background-color: #00b0f0; }
        .CB { background-color: #ffff00; }
        .BI { background-color: #93d150; }
        .AI { background-color: #bfbfbf; }
        .EX { background-color: #fcd5b4; }
      `}</style>
    </div>
  );
};

export default BarraMateriasReact; // Exporta el componente para que se pueda usar en otras partes de la aplicación
