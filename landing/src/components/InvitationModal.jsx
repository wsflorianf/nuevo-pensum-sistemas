import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { useEffect } from "react";

export const InvitationModal = ({ setIsOpen, materias }) => {

  if (!materias || materias.length === 0) {
    return null;  // No renderiza el modal si no hay materias
  }

  const numColumns = 5; // Número de columnas para las materias
  const maxItemsPerColumn = 5; // Número máximo de materias por columna

  // Dividir las materias en columnas
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    materias.slice(columnIndex * maxItemsPerColumn, (columnIndex + 1) * maxItemsPerColumn)
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              <div className="w-full flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="text-white mr-2 text-8xl">
                    <TailcastLogo />
                  </div>
                  <div className="text-white font-['Inter'] font-bold text-3xl">
                    Tailcast
                  </div>
                </div>
    
                <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                  Eje de formacion seleccionado 
                </h3>
    
                <div className="flex justify-between gap-4">
                  {columns.map((column, colIndex) => (
                    <ul key={colIndex} className="mb-6 text-primaryText mt-12">
                      {column.map((materia, index) => (
                        <li key={index} className="mb-4 flex">
                          <CheckArrowIcon />
                          <span>{materia}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
    
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

  
