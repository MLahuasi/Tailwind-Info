import { BackgroundColor } from "./BackgroundColor";
import { BorderColor } from "./BorderColor";
import { IconsColor } from "./IconsColor";
import { TextColor } from "./TextColor";

export { TextColor } from "./TextColor";

export const Color = () => {
  return (
    <>
      <TextColor />
      <BackgroundColor />
      <BorderColor />
      <IconsColor />
    </>
  );
};
