import { BoxModel, Color, Flexbox, Text } from "../post";
import { CardBoxModel, TodoColor } from "../post/Labs";
import { todoColorItems } from "./todoColorItems";

export const postContent: Record<string, React.ReactNode> = {
  "1": <Color />,
  "2": <TodoColor todos={todoColorItems} />,
  "3": <Text />,
  "4": <BoxModel />,
  "5": <CardBoxModel />,
  "6": <Flexbox />,
};
