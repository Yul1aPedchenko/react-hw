import { useFeedback } from "../../FeedbackContext";
import { List, ListItem } from "../Style/Statistics";

export const Statistics = () => {
  const { good, neutral, bad, total, positive } = useFeedback();

  return (
    <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positive}%</ListItem>
    </List>
  );
};
