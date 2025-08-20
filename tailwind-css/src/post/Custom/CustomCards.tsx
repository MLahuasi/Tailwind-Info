export const CustomCards = () => {
  return (
    <div className="mb-4">
      <div className="text-orange-500 text-3xl m-1">(CustomCards)</div>
      <div className="bg-principal-pagina h-[20vh] md:h-[100vh]">
        <section
          className="
            w-[90%] mx-auto py-15
            text-white"
        >
          <h2
            className="
                mb-4
                text-3xl font-bold
          
                md:text-4xl"
          >
            Lo que aprenderas
          </h2>
          <p
            className="
                
          "
          >
            Nuestro curso de CSS cubre todo lo que necesitas saber para
            convertirse en un diseñador web competente.
          </p>
          <div
            className="
            mt-10
            flex flex-wrap justify-center md:justify-between gap-10
            "
          >
            <article
              className="
                w-full max-w-70 p-8 space-y-4
                border border-borde-pagina bg-secundario-pagina
                rounded-xl
            "
            >
              <i className="bx  bx-code text-[52px] text-white"></i>
              <h3 className="text-xl font-bold">Fundamentos de CSS</h3>
              <p className="font-light text-textos-card">
                Comprende los conceptos centrales de CSS, incluyendo selectores,
                propiedades y valores.
              </p>
            </article>

            <article
              className="
                w-full max-w-70 p-8 space-y-4
                border border-borde-pagina bg-secundario-pagina
                rounded-xl
            "
            >
              <i className="bx bx-pointer text-[52px] text-white"></i>
              <h3 className="text-xl font-bold">Técnicas Avanzadas</h3>
              <p className="font-light text-textos-card">
                Explora características avanzadas de CSS como animaciones,
                transiciones y flexbox.
              </p>
            </article>

            <article
              className="
                w-full max-w-70 p-8 space-y-4
                border border-borde-pagina bg-secundario-pagina
                rounded-xl
            "
            >
              <i className="bx  bx-file  text-[52px] text-white"></i>
              <h3 className="text-xl font-bold">
                Aprendizaje Basado en Proyectos
              </h3>
              <p className="font-light text-textos-card">
                Aplica tus conocimientos construyendo proyectos del mundo real y
                piezas de portafolio.
              </p>
            </article>

            <article
              className="
                w-full max-w-70 p-8 space-y-4
                border border-borde-pagina bg-secundario-pagina
                rounded-xl
            "
            >
              <i className="bx  bx-palette  text-[52px] text-white"></i>
              <h3 className="text-xl font-bold">Diseño Responsivo</h3>
              <p className="font-light text-textos-card">
                Crea sitios web que se adapten a diferentes tamaños de pantalla
                y dispositivos.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
