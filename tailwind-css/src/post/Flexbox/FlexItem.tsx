import svgLogo from "../../assets/svg/my.svg";

export const FlexItem = () => {
  return (
    <div className="mb-4">
      <div className="text-green-500 text-4xl">FLEX</div>
      {/* flex-row */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">flex flex-row</div>
        <nav className="flex h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* flex-col */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">flex flex-col</div>
        <nav className="flex flex-col h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* flex-wrap (desbordamientos) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">flex flex-wrap</div>
        <nav className="flex flex-wrap h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* items-stretch (align-items) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">items-stretch</div>
        <nav className="flex items-stretch h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* items-stretch (align-items) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">items-start</div>
        <nav className="flex items-start h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* items-stretch (align-items) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">items-center</div>
        <nav className="flex items-center h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* items-stretch (align-items) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">items-end</div>
        <nav className="flex items-end h-20 bg-slate-800">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-stretch (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">justify-stretch</div>
        <nav className="flex justify-stretch h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-start (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">justify-start</div>
        <nav className="flex justify-start h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-center (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">justify-center</div>
        <nav className="flex justify-center h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-end (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">justify-end</div>
        <nav className="flex justify-end h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-between (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">justify-between</div>
        <nav className="flex justify-between h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="text-white border-4 border-red-200">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>

      {/* justify-between (justify-content) */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          items-center & justify-between & gap
        </div>
        <nav className="flex items-center justify-between h-20 bg-slate-800 px-10">
          <img src={svgLogo} alt="" className="w-40 border-4 border-red-200" />

          <div className="flex text-white border-4 border-red-200 gap-10">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
          </div>
        </nav>
      </div>
    </div>
  );
};
