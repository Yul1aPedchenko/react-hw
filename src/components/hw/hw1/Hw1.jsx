import { ColorList } from "./ColorList";
import {
  name,
  img,
  favWebsite,
  firstNum,
  secondNum,
} from "../../../dataBase/hw1/info";

export const Hw1 = () => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img.URL} alt={img.Alt} />
      <a href={favWebsite.url}>{favWebsite.name}</a>
      <p>
        {firstNum} + {secondNum} = {firstNum + secondNum}
      </p>
      <ColorList />
    </div>
  );
};
