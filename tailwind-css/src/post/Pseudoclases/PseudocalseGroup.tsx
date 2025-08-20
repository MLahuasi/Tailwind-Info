export const PseudocalseGroup = () => {
  return (
    <div className="mb-4">
      {/* Group */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          group (cambiar estido de hijos)
        </div>
        <section className="bg-purple-100 py-20 ">
          <h1 className="mb-6 text-center text-2xl font-extrabold">
            !Aprende Tailwind desde Cero!
          </h1>
          <a
            href="#"
            className="
            flex w-max
            gap-2 px-10 py-4 mx-auto
            bg-purple-900 
            rounded-xl
            hover:bg-purple-400
            group
            "
          >
            {/* Icono */}
            <div className="w-6 h-6">
              <i
                className="
              bx bx-envelope-open 
              text-[25px] text-white
              group-hover:text-black
              "
              ></i>
            </div>
            <span className="text-white font-semibold group-hover:text-black">
              Accede al Curso
            </span>
          </a>
        </section>
      </div>
      {/* Group (Nombrar elementos) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          group/nombre_group (cambiar por nombre_group)
        </div>
        <section className="bg-purple-100 py-20 ">
          <h1 className="mb-6 text-center text-2xl font-extrabold">
            !Aprende Tailwind desde Cero!
          </h1>
          <a
            href="#"
            className="
            flex w-max
            gap-2 px-10 py-4 mx-auto
            bg-purple-900 
            rounded-xl
            hover:bg-purple-400
            group/link
            "
          >
            {/* Icono */}
            <div className="w-6 h-6">
              <i
                className="
              bx bx-envelope-open 
              text-[25px] text-white
              group-hover/link:text-black
              "
              ></i>
            </div>
            <span className="text-white font-semibold group-hover/link:text-black">
              Accede al Curso
            </span>
          </a>
        </section>
      </div>
    </div>
  );
};
