import { Greeting } from "./Greeting";
import { Message } from "./Message";
import { Button } from "./Button";

let counter = 0;
const handleClick = () => {
  counter++;
  return console.log("Button was clicked:", counter);
};

export const Hw2 = () => {
  return (
    <>
      <Greeting name="Yul" />
      <Message text="Random text for task" />
      <Button onClick={handleClick} />
    </>
  );
};
