export const TextFontSize = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">TEXT FONT SIZE</div>
      <div className="text-orange-500 text-3xl m-1">text-tamaño</div>
      <div className="flex-row text-2xl">
        <div className="flex  items-baseline">
          <div className="mr-2.5">text-5xl: </div>
          <div className="text-5xl ml-0.5"> Text Font Size </div>
        </div>
        <div className="flex items-baseline">
          <div className="mr-2.5">text-[55px]: </div>
          <div className="text-[55px] ml-0.5 leading-none">Text Font Size</div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Con tamaño personalizado
          </div>
        </div>
      </div>
    </div>
  );
};
