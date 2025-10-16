import { useState } from "react";
import { FormWrapper, Label, Input, AddButton } from "./Styles/AddContact";
import { useContacts } from "../ContactsContext";

export const AddContact = () => {
  const { addContact } = useContacts(); 
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/;
    const numberRegex =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!nameRegex.test(name)) return alert("Invalid name!");
    if (!numberRegex.test(number)) return alert("Invalid phone number!");

    addContact({
      id: Date.now().toString(),
      name,
      number,
    });

    setName("");
    setNumber("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" onChange={handleChange} value={name} required />
      </Label>
      <Label>
        Number
        <Input type="tel" name="number" onChange={handleChange} value={number} required />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </FormWrapper>
  );
};
