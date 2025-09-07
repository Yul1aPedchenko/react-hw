import React, { useState } from "react";
import { Item, Question, Answer } from "./Style/FaqItem";
import { FiPlus, FiMinus } from "react-icons/fi";

export const FaqItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Item>
      <Question onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <h2>{question}</h2>
        {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
      </Question>
      {isOpen && <Answer>{children}</Answer>}
    </Item>
  );
};
