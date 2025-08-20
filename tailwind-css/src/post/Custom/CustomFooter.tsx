export const CustomFooter = () => {
  return (
    <div className="mb-4">
      <div className="text-orange-500 text-3xl m-1">(Custom Footer)</div>
      <div className="bg-principal-pagina h-[20vh]">
        <footer
          className="
          py-15
          border-t border-borde-pagina
        "
        >
          <div
            className="
            w-[90%] mx-auto
            text-textos-card
          "
          >
            <nav className="">
              <ul
                className="
                flex flex-wrap
                gap-8 justify-evenly

                <!-- aplicar a todos los hijos del elemento -->
                **:hover:underline
              "
              >
                <li className="">
                  <a href="#" className="">
                    Políticas de Seguridad
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Términos del Servicio
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </nav>
            <p
              className="
              text-center mt-10
            "
            >
              &copy; CodeCraft. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
