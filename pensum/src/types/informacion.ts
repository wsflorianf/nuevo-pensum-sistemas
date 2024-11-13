export interface Nivel {
    nombre: string;   // Nivel
    materias: Materia[]; // Lista de materias en el nivel
}

export interface Materia {
    codigo: number;        // Código de la Materia
    nombre: string;        // Nombre Completo
    creditos: number;      // Número de Créditos
    td: number;            // Horas Trabajo Directo
    tc: number;            // Horas Trabajo Colaborativo
    ta: number;            // Horas Trabajo Autónomo
    urlSyllabus: string;   // URL del syllabus o plan de la materia
}
