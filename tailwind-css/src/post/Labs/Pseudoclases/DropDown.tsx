// export const DropDown = () => {
//   return (
//     <div
//       className="
//           flex h-[65vh] items-center justify-center
//           bg-linear-to-t/hsl from-sky-500 to-indigo-500
//         "
//     >
//       <ul className="">
//         <li
//           className="
//             relative
//             bg-white rounded-2xl w-45
//             active:scale-105 transition-transform

//             group/dropdown
//             "
//         >
//           <label
//             htmlFor=""
//             className="w-full flex justify-center items-center gap-2 py-4"
//           >
//             <span className="">Opciones</span>
//             {/* Icono */}
//             <div className="w-6 h-6">
//               <i
//                 className="
//               bx bx-chevron-right
//               text-[25px]
//               "
//               ></i>
//             </div>
//             <input type="checkbox" className="hidden" />
//           </label>

//           {/* Submenú */}
//           <ul
//             className="
//              absolute top-[calc(100%+20px)] w-65 right-0
//              p-6
//              bg-white rounded-2xl
//              opacity-0
//              pointer-events-none

//              group-has-checked/dropdown:opacity-100
//              group-has-checked/dropdown:pointer-events-auto
//              transition-opacity
//             "
//           >
//             <li className="flex gap-2 p-2 hover:bg-zinc-200/50 cursor-pointer">
//               <div className="w-6 h-6">
//                 <i
//                   className="
//                     bx bx-home
//                     text-[25px]
//                   "
//                 ></i>
//               </div>
//               <span>Inicio</span>
//             </li>

//             <li className="flex gap-2 p-2 hover:bg-zinc-200/50 cursor-pointer">
//               <div className="w-6 h-6">
//                 <i
//                   className="
//                     bx bx-user
//                     text-[25px]
//                   "
//                 ></i>
//               </div>
//               <span>Perfil</span>
//             </li>

//             <li className="flex gap-2 p-2 hover:bg-zinc-200/50 cursor-pointer">
//               <div className="w-6 h-6">
//                 <i
//                   className="
//                     bx bx-cog
//                     text-[25px]
//                   "
//                 ></i>
//               </div>
//               <span>Configuración</span>
//             </li>

//             <li className="flex gap-2 p-2 hover:bg-zinc-200/50 cursor-pointer">
//               <div className="w-6 h-6">
//                 <i
//                   className="
//                     bx bx-log-out
//                     text-[25px]
//                   "
//                 ></i>
//               </div>
//               <span>Salir</span>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// };

// Componente: DropDown con group-has funcionando en Tailwind 4.1.11
// - Usamos `group/dropdown` en el <li> padre para poder aplicar variantes `group-has-*`
// - El <input type="checkbox"> tiene un id y el <label> usa htmlFor para accesibilidad
// - Corregido `bg-linear-to-t/hsl` -> `bg-gradient-to-t`
// - Corregidos tamaños no estándar: w-45 / w-65 -> w-[180px] / w-[260px] (arbitrarios)
// - Submenú: oculto por defecto y visible cuando el checkbox está :checked (via group-has-[:checked])

export const DropDown = () => {
  return (
    <div
      className="
        flex h-[65vh] items-center justify-center
        bg-gradient-to-t from-sky-500 to-indigo-500
        p-4
      "
    >
      <ul>
        <li
          className="
            relative
            bg-white rounded-2xl w-[180px]
            active:scale-105 transition-transform
            shadow-md
            group/dropdown
          "
        >
          {/* Checkbox controlador (oculto) */}
          <input id="menu" type="checkbox" className="hidden" />

          {/* Botón/label que alterna el checkbox */}
          <label
            htmlFor="menu"
            className="
              w-full flex justify-center items-center gap-2 py-4 px-5
              cursor-pointer select-none
            "
          >
            <span>Opciones</span>

            {/* Icono chevron (opcional: rotación al abrir) */}
            <i
              className="
                bx bx-chevron-right text-[22px]
                transition-transform
                group-has-[:checked]/dropdown:rotate-90
              "
              aria-hidden="true"
            />
          </label>

          {/* Submenú */}
          <ul
            className="
              absolute top-[calc(100%+12px)] right-0
              w-[260px] p-4
              bg-white rounded-2xl shadow-lg
              opacity-0 pointer-events-none
              transition-opacity
              z-10

              group-has-[:checked]/dropdown:opacity-100
              group-has-[:checked]/dropdown:pointer-events-auto
            "
            aria-label="Submenú"
          >
            <li className="flex gap-2 p-2 rounded-md hover:bg-zinc-200/50 cursor-pointer">
              <i className="bx bx-home text-[20px]" aria-hidden="true" />
              <span>Inicio</span>
            </li>

            <li className="flex gap-2 p-2 rounded-md hover:bg-zinc-200/50 cursor-pointer">
              <i className="bx bx-user text-[20px]" aria-hidden="true" />
              <span>Perfil</span>
            </li>

            <li className="flex gap-2 p-2 rounded-md hover:bg-zinc-200/50 cursor-pointer">
              <i className="bx bx-cog text-[20px]" aria-hidden="true" />
              <span>Configuración</span>
            </li>

            <li className="flex gap-2 p-2 rounded-md hover:bg-zinc-200/50 cursor-pointer">
              <i className="bx bx-log-out text-[20px]" aria-hidden="true" />
              <span>Salir</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
