import { List, ListItem, Button } from "../Style/FeedbackOptions";
import { useFeedback } from "../../FeedbackContext";

export const FeedbackOptions = () => {
  const { handleChange } = useFeedback();

  const options = ["good", "neutral", "bad"];

  return (
    <List>
      {options.map((option) => (
        <ListItem key={option}>
          <Button onClick={() => handleChange(option)}>
            {option}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
