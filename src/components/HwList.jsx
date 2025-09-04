import React from "react";
import FaqItem from "./common/FaqItem";
import { Hw1 } from "./hw/hw1/Hw1";
import { Hw2 } from "./hw/hw2/Hw2";
import { Hw3 } from "./hw/hw3/Hw3";
import { Hw4 } from "./hw/hw4/Hw4";
import { Hw5 } from "./hw/hw5/Hw5";
import { Hw7 } from "./hw/hw7/Hw7";
import { Hw8 } from "./hw/hw8/Hw8";
import { Hw10 } from "./hw/hw10/Hw10";

export const HwList = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Homeworks</h1>
      <FaqItem question="Homework 10">
        <Hw10 />
      </FaqItem>
      <FaqItem question="Homework 8">
        <Hw8 />
      </FaqItem>
      <FaqItem question="Homework 7">
        <Hw7 />
      </FaqItem>
      <FaqItem question="Homework 5">
        <Hw5 />
      </FaqItem>
      <FaqItem question="Homework 4">
        <Hw4 />
      </FaqItem>
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
