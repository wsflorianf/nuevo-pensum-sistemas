import infoElectivas from "@/data/infoElectivas";

export function obtenerMateria(codigo: string){
    return infoElectivas.find(materia => materia.codigo === codigo)
}