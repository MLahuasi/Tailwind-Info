export const TextFontStyle = () => {
  return (
    <div className="flex-row mb-4">
      <div className="text-green-500 text-4xl">TEXT FONT STYLE</div>
      <div className="text-orange-500 text-3xl m-1">font-style</div>
      <div className="flex-row text-2xl">
        <div className="flex  items-baseline">
          <div className="mr-2.5">italic: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-extralight italic ml-0.5">
            Text Font Style
          </div>
        </div>
        <div className="flex  items-baseline">
          <div className="mr-2.5">not-italic: </div>
          <div className="text-[24px] font-[Plus_Jakarta_Sans] font-extralight not-italic ml-0.5">
            Text Font Style
          </div>
        </div>
      </div>
    </div>
  );
};
