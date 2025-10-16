import { Label, Input } from "./Styles/Filter";
import { useContacts } from "../ContactsContext";

export const Filter = () => {
  const { filter, filterContacts } = useContacts();

  return (
    <form>
      <Label>
        Search contact by name
        <Input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => filterContacts(e.target.value)}
        />
      </Label>
    </form>
  );
};
