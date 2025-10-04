import { useState } from "react";
import { Wrapper } from "./Style/Hw16";
import { FeedbackOptions } from "./components/FeedbackOptions";
import { Statistics } from "./components/Statistics";
import { Section } from "./components/Section";
import { Notification } from "./components/Notification";

export const Hw16 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = (type) => {
    const setters = {
      good: () => setGood(good + 1),
      neutral: () => setNeutral(neutral + 1),
      bad: () => setBad(bad + 1),
    };
    setters[type]();
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.floor((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <Wrapper>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleChange}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};
