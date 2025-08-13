import imgMountain from "../../assets/images/img-mountain.jpg";
export const BoxModelPaddingMargin = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">PADDING & MARGIN</div>
      {/* Padding */}
      <div className="flex flex-col [@media(min-width:1250px)]:flex-row">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">p-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">p-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 p-15" />
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">px-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">px-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 px-15" />
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">py-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">py-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 py-15" />
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">pt-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">pt-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 pt-15" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col [@media(min-width:1250px)]:flex-row">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">pr-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">pr-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 pr-15" />
            </div>
          </div>
        </div>

        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">pb-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">pb-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 pb-15" />
            </div>
          </div>
        </div>

        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">pr-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">pl-15: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 pl-15" />
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">pr-[dimension]</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">p-[10px]: </div>
            <div className="flex  bg-amber-300 size-75 justify-center items-center">
              <img src={imgMountain} alt="" className="size-75 p-[10px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Margin */}
      <div className="flex flex-col [@media(min-width:1250px)]:flex-row ">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">m-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">m-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 m-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">mx-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">mx-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 mx-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col [@media(min-width:1250px)]:flex-row">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">my-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">my-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 my-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>

        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">mt-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">mt-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 mt-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col [@media(min-width:1250px)]:flex-row">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">mr-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">mr-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 mr-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>

        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">mb-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">mb-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 mb-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col [@media(min-width:1250px)]:flex-row">
        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">ml-dimension</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">ml-15: </div>
            <div className="flex  items-baseline  border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 ml-15" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>

        <div className="m-3">
          <div className="text-orange-500 text-3xl m-1">m-[dimension]</div>
          <div className="flex-row text-2xl">
            <div className="mr-2.5">m-[25px]: </div>
            <div className="flex  items-baseline border border-red-500 w-190">
              <p className="bg-lime-600 p-3 m-3 border">Vecino #1</p>
              <img src={imgMountain} alt="" className="h-50 m-[25px]" />
              <p className="bg-lime-600 p-3 m-3 border">Vecino #2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
