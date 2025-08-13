export const BoxModelBorder = () => {
  return (
    <div className="mb-4">
      <div className="text-green-500 text-4xl">BORDER</div>
      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* border */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline-block border">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
        {/* boder-color */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block  ">
                Contacto
              </a>
            </article>
          </div>
        </div>
        {/* border-weight */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-5 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* border vertical */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-y-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-y-5 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* border horizontal */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-x-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-x-4 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* border Top */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-t-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-t-4 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* border Right */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-r-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-r-4 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* border Button */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-r-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-b-4 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* border Left */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-l-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-l-4 border-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* Border color left right  */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-y-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-y-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* Border colr top buttom */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-x-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-x-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* border color top */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-t-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-t-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* Border color right */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-r-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-r-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* Boder color buttom */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-b-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-b-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* Border color left */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-l-color-peso
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-l-amber-400"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* Transparencia */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">
              border-color-peso/transparencia
            </div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400/50"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      {/* border-style */}
      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* Solid */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-solid</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-solid"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* Dashed */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-dashed</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-dashed"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* dotted */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-dotted</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-dotted"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* double */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-double</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-double"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* hidden */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-hidden</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-hidden"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* none */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">border-none</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a
                href="#"
                className="px-8 py-4 inline-block border-8 border-amber-400 border-none"
              >
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 [@media(min-width:1250px)]:flex-row">
        {/* divide-x */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">divide-x-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto divide-x-10 divide-green-500 divide-dashed">
              <a href="#" className="px-8 py-4 inline-block ">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 inline-block ">
                Contacto
              </a>
            </article>
          </div>
        </div>

        {/* divide-y */}
        <div className="m-3">
          <div className="flex">
            <div className="text-orange-500 text-3xl m-1">divide-y-peso</div>
            <article className="bg-slate-800 text-white w-max mt-30 mx-auto divide-y-10 divide-green-500 divide-dotted">
              <a href="#" className="px-8 py-4 block ">
                Inicio
              </a>
              <a href="#" className="px-8 py-4 block ">
                Acerca
              </a>
              <a href="#" className="px-8 py-4 block ">
                Contacto
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
