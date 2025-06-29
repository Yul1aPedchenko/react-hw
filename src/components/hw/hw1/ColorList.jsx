import { colors } from "../../../dataBase/hw1/colors";
import { ColorItem } from "./ColorItem";

export const ColorList = () => {
  return (
    <ul>
      {colors.map((color) => {
        return <ColorItem colorInfo={color} />;
      })}
    </ul>
  );
};
