import logo from "../../assets/svg/my.svg";

export const CustomAnimatedMenu = () => {
  return (
    <div className="mb-4">
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          @theme @layer components
        </div>
        <div className="bg-principal-pagina h-[40vh] relative overflow-hidden">
          <nav className="py-8 border-2 border-borde-pagina">
            <div className="flex w-[90%] mx-auto justify-between items-center">
              <a href="#" className="relative z-10">
                <img src={logo} alt="logo pagina" className="h-10 w-auto" />
              </a>
              {/* Botón ícono: color con text-* */}
              <label
                className="
                    icon-menu relative z-10
                    transition-all text-white 
                    peer/label

                    md:hidden
                "
                aria-label="Abrir/Cerrar menú"
              >
                {/* Mantén el input dentro para que :has(:checked) funcione */}
                <input
                  type="checkbox"
                  className="sr-only" /* mejor que hidden: conserva accesibilidad teclado */
                />
              </label>

              {/* Items Menu */}
              <ul
                className="
                absolute inset-0
                text-white bg-principal-pagina/50

                flex flex-col gap-8
                justify-center items-center

                -translate-y-full

                peer-has-checked/label:translate-0
                transition-transform

                md:static
                md:translate-0
                md:flex-row
              "
              >
                <li>
                  <a href="#">Acerca de</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                  bg-button
                  text-principal-pagina py-4
                  px-6 rounded-full                  
                  "
                  >
                    Ingresa al curso
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
