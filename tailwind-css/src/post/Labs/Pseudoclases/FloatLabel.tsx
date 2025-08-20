export const FloatLabel = () => {
  return (
    <div
      className="
          flex h-[40vh] items-center justify-center
        bg-zinc-300 
        "
    >
      <form
        className="
            w-100 relative
            flex flex-col items-start
            gap-3 px-6 py-10
            bg-white rounded-xl shadow-xl
          "
      >
        <button
          className="
            w-full
            mt-4 py-4
            text-white font-light
            bg-blue-600 rounded-xl

            order-2
            peer/btn
            "
        >
          Continuar
        </button>

        <input
          type="text"
          placeholder=" "
          className="
            w-full
            px-4 py-2
            border-b border-zinc-600 outline-blue-600 outline-none

            order-1
            peer/input
            "
        />
        <label
          className="
            absolute top-12 left-10

            pointer-events-none  

            text-zinc-600
            
            peer-focus/input:text-blue-600
            peer-focus/input:text-xs
            peer-focus/input:-translate-y-5

            peer-not-placeholder-shown/input:text-blue-600
            peer-not-placeholder-shown/input:text-xs
            peer-not-placeholder-shown/input:-translate-y-5


            peer-hover/btn:bg-emerald-200/50

            transition-all
            "
        >
          Ingresa tu nombre:
        </label>
      </form>
    </div>
  );
};
