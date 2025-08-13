export const TextFontWeight = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">TEXT FONT WEIGHT</div>
      <div className="text-orange-500 text-3xl m-1">font-peso</div>
      <div className="flex-row text-2xl">
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-extralight: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-extralight ml-0.5">
            Text Font Weight
          </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-medium: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-medium ml-0.5">
            Text Font Weight
          </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-extrabold: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-extrabold ml-0.5">
            Text Font Weight
          </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-[600]: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-[600] ml-0.5">
            Text Font Weight
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Con peso personalizado se basa en la fuente de google fonts
          </div>
        </div>
      </div>
    </div>
  );
};
