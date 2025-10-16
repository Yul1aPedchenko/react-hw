import { useState, useRef, useEffect } from "react";
import { Wrapper } from "./Style/Hw16";
import { FeedbackOptions } from "./components/FeedbackOptions";
import { Statistics } from "./components/Statistics";
import { Section } from "./components/Section";
import { Notification } from "./components/Notification";
import { FeedbackContext } from "../FeedbackContext";

export const Hw16 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodBtnRef = useRef(null); 

  useEffect(() => {
    if (goodBtnRef.current) {
      goodBtnRef.current.focus();
    }
  }, []);

  const handleChange = (type) => {
    const setters = {
      good: () => setGood(good + 1),
      neutral: () => setNeutral(neutral + 1),
      bad: () => setBad(bad + 1),
    };
    setters[type]();
  };

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();
  const positive = total > 0 ? Math.floor((good / total) * 100) : 0;

  const value = {
    good,
    neutral,
    bad,
    total,
    positive,
    handleChange,
    goodBtnRef, 
  };

  return (
    <FeedbackContext.Provider value={value}>
      <Wrapper>
        <Section title="Please leave a feedback">
          <FeedbackOptions />
        </Section>

        <Section title="Statistics">
          {total > 0 ? <Statistics /> : <Notification message="There is no feedback" />}
        </Section>
      </Wrapper>
    </FeedbackContext.Provider>
  );
};
