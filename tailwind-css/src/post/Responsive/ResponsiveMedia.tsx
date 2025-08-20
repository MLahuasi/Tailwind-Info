import svgLogo from "../../assets/svg/my.svg";

export const ResponsiveMedia = () => {
  return (
    <div className="mb-4">
      <div className="text-green-500 text-4xl">Responsive</div>
      <div className="flex flex-col">
        {/* sm: cambia si es mayor o igual a 640px */}
        {/* md: cambia si es mayor o igual a 768px */}
        {/* lg: cambia si es mayor o igual a 1024px */}
        <div className="text-orange-500 text-3xl m-1">
          Brekapoints (media css)
        </div>
        <div className="text-blue-500 text-1xl m-1">sm: | md: | lg:</div>
        <nav
          className="
            flex items-center justify-between h-40 bg-slate-800 px-10
            sm:bg-red-800
            md:bg-green-400
            lg:bg-yellow-400
          "
        >
          <img src={svgLogo} alt="" className="w-40 " />

          <div className="flex text-white gap-10">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>

          <a href="#" className="bg-amber-700 text-white px-7 py-3 rounded-lg">
            Contactanos
          </a>
        </nav>
      </div>

      {/* Mobile First */}
      {/* en taildwind es recomendable diseñar con mobile-first */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">Mobile First</div>
        <div className="text-blue-500 text-1xl m-1">sm: | md: | lg:</div>
        <nav
          className="
            h-auto
            bg-slate-800
            flex flex-col gap-5 
            items-center justify-between px-6
            md:flex-row
          "
        >
          <img src={svgLogo} alt="" className="w-40 " />

          <div
            className="
             flex text-white 
             gap-10
             order-1
             md:order-0
            "
          >
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>

          <a href="#" className="bg-amber-700 text-white px-7 py-3 rounded-lg">
            Contactanos
          </a>
        </nav>
      </div>

      {/* Desktop First  */}
      {/* max-sm: menos de 640px */}
      {/* max-md: menos de 768px */}
      {/* max-lg: menos de 1024px */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">Desktop First</div>
        <div className="text-blue-500 text-1xl m-1">
          max-sm: | max-md: | max-lg:
        </div>
        <nav
          className="
            h-auto
            bg-slate-800
            flex flex-col gap-5 
            items-center justify-between px-6
            md:flex-row
            max-sm:bg-red-800
            max-md:bg-green-800
            max-lg:bg-blue-800
          "
        >
          <img src={svgLogo} alt="" className="w-40 " />

          <div
            className="
             flex text-white 
             gap-10
             order-1
             md:order-0
            "
          >
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>

          <a href="#" className="bg-amber-700 text-white px-7 py-3 rounded-lg">
            Contactanos
          </a>
        </nav>
      </div>

      {/* Rangos Breakpoints */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          Rangos Brekapoints (media css)
        </div>
        <div className="text-blue-500 text-1xl m-1">
          sm:max- | md:max- | lg:max-
        </div>
        <nav
          className="
            h-auto
            bg-slate-800
            flex flex-col gap-5 
            items-center justify-between px-6
            md:flex-row
            sm:max-lg:bg-red-400
          "
        >
          <img src={svgLogo} alt="" className="w-40 " />

          <div
            className="
             flex text-white 
             gap-10
             order-1
             md:order-0
            "
          >
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>

          <a href="#" className="bg-amber-700 text-white px-7 py-3 rounded-lg">
            Contactanos
          </a>
        </nav>
      </div>
    </div>
  );
};
