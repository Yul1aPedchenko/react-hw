import { Label, Input } from "./Styles/Filter";
import { useContacts } from "../ContactsContext";

export const Filter = () => {
  const { filter, filterContacts, filterRef } = useContacts();

  const handleChange = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <form>
      <Label>
        Search contact by name
        <Input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleChange}
          ref={filterRef} 
        />
      </Label>
    </form>
  );
};
