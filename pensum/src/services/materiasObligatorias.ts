import infoObligatorias from "@/data/infoObligatorias";
import type { MateriaType } from "@/types/informacion";


//Obtener materia obligatoria con su información a través de su id
export function obtenerMateria(id: number|undefined){
    console.log(id)
    return infoObligatorias.find(materia=>materia.id==id)
}

//Obtener todas las materias obligatorias
export function obtenerMaterias(): MateriaType[]{
    return infoObligatorias
}