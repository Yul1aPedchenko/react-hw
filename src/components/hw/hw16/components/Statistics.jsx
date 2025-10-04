import { List, ListItem } from "../Style/Statistics.js";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage}%</ListItem>
    </List>
  );
};
