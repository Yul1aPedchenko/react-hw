import { useFeedback } from "../../FeedbackContext";
import { List, ListItem, Button } from "../Style/FeedbackOptions";

export const FeedbackOptions = () => {
  const { handleChange, goodBtnRef } = useFeedback();
  const options = ["good", "neutral", "bad"];

  return (
    <List>
      {options.map((option) => (
        <ListItem key={option}>
          <Button
            ref={option === "good" ? goodBtnRef : null} 
            onClick={() => handleChange(option)}
          >
            {option}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
