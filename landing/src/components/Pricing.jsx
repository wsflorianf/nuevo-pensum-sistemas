import { useState } from "react";
import { motion } from "framer-motion";
import RutaBasica from "../assets/images/RutaBasica.png";
import Ruta from "../assets/images/Ruta.png";
import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="flex" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title text-center">
            La Flexibilidad Del Proyecto
            </h2>
              <h2 className="mt-6 mb-6 text-2xl lg:text-2xl font-bold font-heading text-primaryText">
                Elige la mejor ruta
              </h2>
              <p className="mb-6 text-secondaryText">
                Comenzando con cursos nivelatorios en producción de texto y
                precálculo, seguido por una base en ciencias básicas y materias
                fundamentales de ingeniería. Luego, los estudiantes avanzan a
                aplicaciones prácticas en la "Ruta de formación", donde
                desarrollan competencias específicas y logran resultados de
                aprendizaje. Finalmente, fortalecen habilidades adicionales en
                áreas clave para completar su preparación profesional en
                ingeniería.
              </p>
              <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-secondaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold ">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Básicas
                  </div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Rutas</div>
                </div>
              </label>
            </div>
            <div className="">
              <div className="sm:w-full px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-white rounded-3xl mb-10">
                  <h3 className="mb-2 text-xl font-bold font-heading text-bgDarkTransparentLighter text-center">
                    Ruta de Formacion
                  </h3>
                  <div>
                    {isMonthly ? (
                      <img
                        src={RutaBasica.src}
                        alt="Feature image 1"
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                        aria-label="Feature image 1"
                        height={600}
                      />
                    ) : (
                      <img
                        src={Ruta.src}
                        alt="Feature image 1"
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                        aria-label="Feature image 1"
                        height={600}
                      />
                    )}
                  </div>
                </div>
                <h1 className="block-subtitle text-center">
                Componente Común
              </h1>
                <div class="overflow-x-auto mt-10 rounded-3xl">
                  <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th class="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">
                          Área
                        </th>
                        <th class="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">
                          Resolución 053 de 2011
                        </th>
                        <th class="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">
                          Créditos
                        </th>
                        <th class="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">
                          Plan de Estudios 2023
                        </th>
                        <th class="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">
                          Créditos
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          class="py-2 px-4 border-b border-gray-300"
                          rowspan="11"
                        >
                          Complementaria
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Producción y Comprensión de Textos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Producción y Comprensión de Textos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">0</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Segundo Idioma
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">6</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Segundo Idioma
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">0</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cátedra Caldas
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cátedra Caldas
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cátedra Democracia y Ciudadanía
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cátedra Democracia y Ciudadanía
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ética y Bioética
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ética y Bioética
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Hombre, Sociedad y Ecología
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">1</td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Historia y Cultura Colombiana
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ingeniería Económica
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ingeniería Económica
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Formulación y Evaluación de Proyectos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Formulación y Evaluación de Proyectos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Economía
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Economía
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          Total
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          22
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          10
                        </td>
                      </tr>

                      <tr>
                        <td
                          class="py-2 px-4 border-b border-gray-300"
                          rowspan="10"
                        >
                          Ciencias Básicas
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Diferencial
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">4</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Precálculo
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">0</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Integral
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Diferencial
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Multivariado
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Integral
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ecuaciones Diferenciales
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Cálculo Multivariado
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Álgebra Lineal
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Ecuaciones Diferenciales
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Física I Newtoniana
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Álgebra Lineal
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Física II Electromagnetismo
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Física I Newtoniana
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Física III Ondas y Moderna
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Física II Electromagnetismo
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          Total
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          25
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          24
                        </td>
                      </tr>

                      <tr>
                        <td
                          class="py-2 px-4 border-b border-gray-300"
                          rowspan="5"
                        >
                          Básica
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Seminario de Ingeniería
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Seminario de Ingeniería
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">2</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Programación Básica
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Programación Básica
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Programación Orientada a Objetos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Programación Orientada a Objetos
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">3</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Trabajo de Grado
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">4</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                          Trabajo de Grado
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300">4</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          Total
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          11
                        </td>
                        <td class="py-2 px-4 border-b border-gray-300"></td>
                        <td class="py-2 px-4 border-b border-gray-300 font-bold">
                          13
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
