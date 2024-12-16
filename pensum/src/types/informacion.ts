export interface NivelType {
    nombre: string;   // Nivel
    materias: MateriaType[]; // Lista de materias en el nivel
}

// CO: Complementario
// CB: Ciencias Básicas
// BI: Básicas de Ingeniería 
// EX: Extrínsecas
// AI: Aplicadas de Ingeniería
//     EL: Electiva
//     OPCION: Opcion Obligatoria
// NA: No Aplica (Para espacios vacíos)

export interface MateriaType {
    id?: number;            //Identificador único de la materia
    codigo?: string;        // Código de la Materia
    nombre: string;        // Nombre Completo
    creditos?: number;      // Número de Créditos
    td?: number;            // Horas Trabajo Directo
    tc?: number;            // Horas Trabajo Colaborativo
    ta?: number;            // Horas Trabajo Autónomo
    urlSyllabus?: string;   // URL del syllabus o plan de la materia
    tipo?: string;          // Tipo de Materia (CO, CB, BI, AI, EX, EL, OPCION, NA)
    electiva?: boolean;     // Establecer si es una materia electiva o no (De carrera)
    opciones?: OpcionType[]; //Lista de elecciones en el espacio
}

export interface OpcionType {
    nombre: string;        // Nombre de la Electiva
    urlSyllabus: string;   // URL del syllabus o plan de la electiva
    tipo?: string;          // Tipo de Materia "OPCION"
    ruta?: string;          // Ruta de aprendizaje de la opcion
}
