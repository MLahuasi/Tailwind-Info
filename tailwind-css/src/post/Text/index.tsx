import { TextAlign } from "./TextAlign";
import { TextFontFamily } from "./TextFontFamily";
import { TextFontSize } from "./TextFontSize";
import { TextFontStyle } from "./TextFontStyle";
import { TextFontWeight } from "./TextFontWeight";

export const Text = () => {
  return (
    <>
      <TextFontSize />
      <TextFontFamily />
      <TextFontWeight />
      <TextFontStyle />
      <TextAlign />
    </>
  );
};
