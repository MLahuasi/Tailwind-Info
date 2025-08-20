import { CustomAnimatedMenu } from "./CustomAnimatedMenu";
import { CustomCards } from "./CustomCards";
import { CustomedBreakpoints } from "./CustomedBreakpoints";
import { CustomFooter } from "./CustomFooter";
import { CustomHero } from "./CustomHero";
import { CustomTailwind } from "./CustomTailwind";

export const Custom = () => {
  return (
    <>
      <CustomTailwind />
      <CustomedBreakpoints />
      <div className="font-inter">
        <CustomAnimatedMenu />
        <CustomHero />
        <CustomCards />
        <CustomFooter />
      </div>
    </>
  );
};
