import { Component } from "react";
import { Wrapper } from "./Style/Hw8";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";

export const Hw8 = () => {
  class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    handleChange = (type) => {
      this.setState((prevState) => ({
        [type]: prevState[type] + 1,
      }));
    };

    countTotalFeedback = () => {
      const total = this.state.good + this.state.neutral + this.state.bad;
      return total;
    };

    countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      return total > 0 ? Math.floor((this.state.good / total) * 100) : 0;
    };

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positive = this.countPositiveFeedbackPercentage();

      return (
        <Wrapper>
          <Section title="Please leave a feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.handleChange}
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
    }
  }

  return <Feedback />;
};
