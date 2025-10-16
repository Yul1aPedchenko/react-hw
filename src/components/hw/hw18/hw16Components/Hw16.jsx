import { useState } from "react";
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

  const handleChange = (type) => {
    const setters = {
      good: () => setGood((prev) => prev + 1),
      neutral: () => setNeutral((prev) => prev + 1),
      bad: () => setBad((prev) => prev + 1),
    };
    setters[type]();
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.floor((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  const contextValue = {
    good,
    neutral,
    bad,
    total,
    positive,
    handleChange,
  };

  return (
    <FeedbackContext.Provider value={contextValue}>
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
