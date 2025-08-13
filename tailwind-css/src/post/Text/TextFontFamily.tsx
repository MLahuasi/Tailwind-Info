export const TextFontFamily = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">TEXT FONT FAMILY</div>
      <div className="text-orange-500 text-3xl m-1">font-nombre</div>
      <div className="flex-row text-2xl">
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-sans: </div>
          <div className="text-[24px] font-sans ml-0.5"> Text Font Family </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-serif: </div>
          <div className="text-[24px] font-serif ml-0.5">Text Font Family </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-mono: </div>
          <div className="text-[24px] font-mono ml-0.5">Text Font Family </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-[cursive]: </div>
          <div className="text-[24px] font-[cursive] ml-0.5">
            Text Font Family
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Con tipo personalizado
          </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">font-[Plus_Jakarta_Sans]: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] ml-0.5">
            Text Font Family
          </div>
          <div className="text-sm flex items-center ml-2 text-red-500">
            Con tipo personalizado con fuente google fonts (se pega en
            index.html)
          </div>
        </div>
      </div>
    </div>
  );
};
