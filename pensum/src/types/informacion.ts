export interface NivelType {
    nombre: string;   // Nivel
    materias: MateriaType[]; // Lista de materias en el nivel
}

export interface MateriaType {
    codigo: number;        // Código de la Materia
    nombre: string;        // Nombre Completo
    creditos: number;      // Número de Créditos
    td: number;            // Horas Trabajo Directo
    tc: number;            // Horas Trabajo Colaborativo
    ta: number;            // Horas Trabajo Autónomo
    urlSyllabus: string;   // URL del syllabus o plan de la materia
    tipo: string;          // Tipo de Materia (CO, CB, BI, AI, EX)
}
