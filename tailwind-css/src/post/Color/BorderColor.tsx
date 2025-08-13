export const BorderColor = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">BORDER COLOR</div>
      <div className="text-orange-500 text-3xl m-1">border-color-peso</div>
      <div className="flex-row  text-2xl">
        <div className="flex m-0.5">
          <div className="mr-2.5">border-amber-800: </div>
          <div className="border-4 border-amber-800 w-[50px] h-[50px]"></div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">border-amber-800: </div>
          <div className="border-4 border-sky-400 w-[50px] h-[50px]"></div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">border-current: </div>
          <div className="border-4 border-current w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Color del Texto
          </div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">border-inherit: </div>
          <div className="border-4 border-inherit w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Color del Elemento Padre
          </div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">border-transparent: </div>
          <div className="border-4 border-transparent w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            No tiene fondo en absoluto
          </div>
        </div>
      </div>
    </div>
  );
};
