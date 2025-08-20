export const PseudoclasePeer = () => {
  return (
    <div className="mb-4">
      {/* Group */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          peer (cambiar estilos del hermano siguiente)
        </div>
        <div
          className="
          flex h-[40vh] items-center justify-center
        bg-zinc-300 
        "
        >
          <form
            className="
            w-100
            flex flex-col items-start
            gap-3 px-6 py-10
            bg-white rounded-xl shadow-xl
          "
          >
            <input
              type="text"
              className="
            w-full
            px-4 py-2
            border-b border-zinc-600 outline-blue-400

            peer
            "
            />
            <label
              className="
            text-zinc-600
            
            peer-focus:text-blue-600
            peer-focus:text-xs
            "
            >
              Ingresa tu nombre:
            </label>
            <button
              className="
            w-full
            mt-4 py-4
            text-white font-light
            bg-blue-600 rounded-xl
            pointer-events-none

            peer-focus:bg-green-600
            "
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
