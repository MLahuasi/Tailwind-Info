import { BoxModelBorder } from "./BoxModelBorder";
import { BoxModelDisplay } from "./BoxModelDisplay";
import { BoxModelPaddingMargin } from "./BoxModelPaddingMargin";
import { BoxModelWidthHeight } from "./BoxModelWidthHeight";

export const BoxModel = () => {
  return (
    <>
      <BoxModelWidthHeight />
      <BoxModelPaddingMargin />
      <BoxModelDisplay />
      <BoxModelBorder />
    </>
  );
};
