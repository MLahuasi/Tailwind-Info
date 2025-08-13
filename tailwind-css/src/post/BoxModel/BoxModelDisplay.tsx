export const BoxModelDisplay = () => {
  return (
    <div className="mb-4">
      <div className="text-green-500 text-4xl">DISPLAY</div>
      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* inline */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">inline</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* block */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">block</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 block">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 block">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 block">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* inline-block */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">inline-block</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline-block">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* space-y-4  */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              block (space-y-4)
            </div>
            <article className=" text-white w-max mt-30 mx-auto space-y-4 border border-amber-400">
              <a href="#" className="px-8 py-4 block bg-slate-800">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 block bg-slate-800">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 block bg-slate-800">
                Contacto
              </a>
            </article>
          </div>
        </div>
        {/* space-x-4  */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              inline-block (space-x-4)
            </div>
            <article className=" text-white w-max mt-30 mx-auto space-x-4 border border-amber-400">
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Contacto
              </a>
            </article>
          </div>
        </div>
        {/*  space-x-4 & space-y-4 */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              inline-block (space-x-4 & space-y-4)
            </div>
            <article className=" text-white w-max mt-30 mx-auto space-x-4 space-y-4 border border-amber-400">
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block bg-slate-800">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
