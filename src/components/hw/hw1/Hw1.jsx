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
    <li className="hw__item">
      <h2>Homework 1 </h2>
      <div className="hw__wrap">
        <h3 className="name">{name}</h3>
        <img src={img.URL} alt={img.Alt} />
        <a href={favWebsite.url}>{favWebsite.name}</a>
        <p>
          {firstNum} + {secondNum} = {firstNum + secondNum}
        </p>
        <ColorList />
      </div>
    </li>
  );
};
