import React from "react";
import FaqItem from "./common/FaqItem";
import { Hw1 } from './hw/hw1/Hw1';
import { Hw2 } from "./hw/hw2/Hw2";
import { Hw3 } from "./hw/hw3/Hw3";

export const HwList = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Homeworks</h1>
      <FaqItem question="Homework 3">
        <Hw3 />
      </FaqItem>
      <FaqItem question="Homework 2">
        <Hw2 />
      </FaqItem>
      <FaqItem question="Homework 1">
        <Hw1 />
      </FaqItem>
    </div>
  );
};
