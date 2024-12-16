import type { MateriaType } from '@/types/informacion'

const infoObligatorias: MateriaType[] = [
  {
    id: 1,
    codigo: '36',
    nombre: 'CURSO OBLIGATORIO I RF',
    creditos: 3,
    td: 2,
    tc: 2,
    ta: 5,
    opciones: [
      {
        nombre: 'INGENIERÍA DE REQUERIMIENTOS',
        urlSyllabus:
          '',
          ruta: 'Análisis, Diseño y Construcción de Software',
        tipo: 'OPCION',
      },
      {
        nombre: 'ESTADÍSTICA MULTIDIMENSIONAL',
        urlSyllabus:
          '',
          ruta: 'Ingeniería de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'REDES DE DATOS I',
        urlSyllabus:
          '',
          ruta: 'Redes de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'PLANEACIÓN ESTRATÉGICA',
        urlSyllabus:
          '',
          ruta: 'Planeación y Gestión de Proyectos TI',
        tipo: 'OPCION',
      },
      {
        nombre: 'INTELIGENCIA ARTIFICIAL I',
        urlSyllabus:
          '',
          ruta: 'Cibernética e Inteligencia Artificial (Ciencia de Sistemas)',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 2,
    codigo: '37',
    nombre: 'CURSO OBLIGATORIO II RF',
    creditos: 3,
    td: 2,
    tc: 2,
    ta: 5,
    opciones: [
      {
        nombre: 'DISEÑO DE SOFTWARE',
        urlSyllabus:
          '',
          ruta: 'Análisis, Diseño y Construcción de Software',
        tipo: 'OPCION',
      },
      {
        nombre: 'BASES DE DATOS AVANZADAS',
        urlSyllabus:
          '',
          ruta: 'Ingeniería de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'REDES DE DATOS II',
        urlSyllabus:
          '',
          ruta: 'Redes de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'FUNDAMENTOS DE ARQUITECTURA EMPRESARIAL',
        urlSyllabus:
          '',
          ruta: 'Planeación y Gestión de Proyectos TI',
        tipo: 'OPCION',
      },
      {
        nombre: 'CIBERNÉTICA I',
        urlSyllabus:
          '',
          ruta: 'Cibernética e Inteligencia Artificial (Ciencia de Sistemas)',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 3,
    codigo: '46',
    nombre: 'CURSO ELECTIVO FLEXIBLE I RF',
    creditos: 4,
    td: 4,
    tc: 2,
    ta: 6,
    opciones: [
      {
        nombre: 'CURSO 1',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 2',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 3',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 4',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 4,
    codigo: '41',
    nombre: 'CURSO OBLIGATORIO III RF',
    creditos: 3,
    td: 2,
    tc: 2,
    ta: 5,
    opciones: [
      {
        nombre: 'CONSTRUCCIÓN DE SOFTWARE',
        urlSyllabus:
          '',
          ruta: 'Análisis, Diseño y Construcción de Software',
        tipo: 'OPCION',
      },
      {
        nombre: 'MINERÍA DE DATOS',
        urlSyllabus:
          '',
          ruta: 'Ingeniería de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'REDES DE DATOS III',
        urlSyllabus:
          '',
          ruta: 'Redes de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'GESTIÓN DE PROYECTOS INFORMÁTICOS',
        urlSyllabus:
          '',
          ruta: 'Planeación y Gestión de Proyectos TI',
        tipo: 'OPCION',
      },
      {
        nombre: 'INTELIGENCIA ARTIFICIAL II',
        urlSyllabus:
          '',
          ruta: 'Cibernética e Inteligencia Artificial (Ciencia de Sistemas)',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 5,
    codigo: '42',
    nombre: 'CURSO OBLIGATORIO IV RF',
    creditos: 3,
    td: 2,
    tc: 2,
    ta: 5,
    opciones: [
      {
        nombre: 'CALIDAD DE SOFTWARE',
        urlSyllabus:
          '',
          ruta: 'Análisis, Diseño y Construcción de Software',
        tipo: 'OPCION',
      },
      {
        nombre: 'PROGRAMACIÓN PARA ANÁLISIS DE DATOS',
        urlSyllabus:
          '',
          ruta: 'Ingeniería de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'REDES DE DATOS IV',
        urlSyllabus:
          '',
          ruta: 'Redes de Datos',
        tipo: 'OPCION',
      },
      {
        nombre: 'GOBIERNO Y GESTIÓN DE TI',
        urlSyllabus:
          '',
          ruta: 'Planeación y Gestión de Proyectos TI',
        tipo: 'OPCION',
      },
      {
        nombre: 'CIBERNÉTICA II',
        urlSyllabus:
          '',
          ruta: 'Cibernética e Inteligencia Artificial (Ciencia de Sistemas)',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 6,
    codigo: '47',
    nombre: 'CURSO ELECTIVO FLEXIBLE II RF',
    creditos: 4,
    td: 4,
    tc: 2,
    ta: 6,
    opciones: [
      {
        nombre: 'CURSO 1',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 2',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 3',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 4',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
    ],
  },
  {
    id: 7,
    codigo: '51',
    nombre: 'CURSO ELECTIVO FLEXIBLE III RF',
    creditos: 4,
    td: 4,
    tc: 2,
    ta: 6,
    opciones: [
      {
        nombre: 'CURSO 1',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 2',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 3',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 4',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
    ],
  },
  // {nombre: "", tipo: "", urlSyllabus: ""},
  {
    id: 8,
    codigo: '52',
    nombre: 'CURSO ELECTIVO FLEXIBLE IV RF',
    creditos: 4,
    td: 4,
    tc: 2,
    ta: 6,
    opciones: [
      {
        nombre: 'CURSO 1',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 2',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 3',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
      {
        nombre: 'CURSO 4',
        urlSyllabus:
          '',
        tipo: 'OPCION',
      },
    ],
  },
]

export default infoObligatorias
