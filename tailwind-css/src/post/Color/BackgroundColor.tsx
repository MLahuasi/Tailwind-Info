export const BackgroundColor = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">BACKGROUND COLOR</div>
      <div className="text-orange-500 text-3xl m-1">bg-color-peso</div>
      <div className="flex-row  text-2xl">
        <div className="flex m-0.5">
          <div className="mr-2.5">bg-amber-800: </div>
          <div className="bg-amber-800 w-[50px] h-[50px]"></div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">bg-amber-800: </div>
          <div className="bg-sky-400 w-[50px] h-[50px]"></div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">bg-current: </div>
          <div className="bg-current w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Color del Texto
          </div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">bg-inherit: </div>
          <div className="bg-inherit border w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Color del Elemento Padre
          </div>
        </div>
        <div className="flex m-0.5">
          <div className="mr-2.5">bg-transparent: </div>
          <div className="bg-transparent border w-[50px] h-[50px]"></div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            No tiene fondo en absoluto
          </div>
        </div>
      </div>
    </div>
  );
};
