import {
  BoxModel,
  Color,
  Custom,
  Flexbox,
  Pseudoclass,
  Responsive,
  Text,
} from "../post";
import {
  CardBoxModel,
  CardOverlay,
  DropDown,
  FloatLabel,
  ResponsiveForm,
  TodoColor,
} from "../post/Labs";
import { todoColorItems } from "./todoColorItems";

export const postContent: Record<string, React.ReactNode> = {
  "1": <Color />,
  "2": <TodoColor todos={todoColorItems} />,
  "3": <Text />,
  "4": <BoxModel />,
  "5": <CardBoxModel />,
  "6": <Flexbox />,
  "7": <Responsive />,
  "8": <ResponsiveForm />,
  "9": <Pseudoclass />,
  "10": <CardOverlay />,
  "11": <FloatLabel />,
  "12": <DropDown />,
  "13": <Custom />,
};
