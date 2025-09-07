import { List, ListItem, Button } from "./Style/FeedbackOptions";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option) => (
        <ListItem key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
