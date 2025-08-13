import imgMountain from "../../assets/images/img-mountain.jpg";

export const BoxModelWidthHeight = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">WIDTH & HEIGHT</div>
      {/* Width */}
      <div className="text-orange-500 text-3xl m-1">w-dimension</div>
      <div className="flex m-3">
        <div className="m-3 text-2xl">
          <div className="mr-2.5">w-50: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="w-50" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            cada unidad de la dimensión es de 4 por lo tanto el tamaño es de
            50*4
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">w-1/2 (porcentajes): </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="w-1/2" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            1/2 es una fracción que representa 50%
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">w-[553.5px]: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="w-[553.5px]" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            El valor personalizado va entre los corchetes
          </div>
        </div>
      </div>

      {/* Height */}
      <div className="text-orange-500 text-3xl m-1">h-dimension</div>

      <div className="flex m-3">
        <div className="m-3 text-2xl">
          <div className="mr-2.5">h-50: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="h-50" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            cada unidad de la dimensión es de 4 por lo tanto el tamaño es de
            50*4
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">h-3/4 (porcentajes): </div>
          <div className="flex  items-baseline h-100">
            <img src={imgMountain} alt="" className="h-3/4" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            3/4 es una fracción que representa 75% del contenedor padre
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">h-[30vh]: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="h-[30vh]" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            El valor personalizado va entre los corchetes
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="text-orange-500 text-3xl m-1">
        size-dimension (height y width)
      </div>
      <div className="flex m-3">
        <div className="m-3 text-2xl">
          <div className="mr-2.5">size-70: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="size-70" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            modifica tanto al alto como al ancho
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">size-1/4 (porcentajes): </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="size-1/4" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            1/4 es una fracción que representa 25%
          </div>
        </div>

        <div className="m-3 text-2xl">
          <div className="mr-2.5">size-[100px]: </div>
          <div className="flex  items-baseline">
            <img src={imgMountain} alt="" className="size-[100px]" />
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            El valor personalizado va entre los corchetes
          </div>
        </div>
      </div>
    </div>
  );
};
