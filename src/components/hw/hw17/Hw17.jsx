import { useState, useEffect } from "react";
import { AddContact } from "./AddContact";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import { Wrapper, SubWrapper } from "./Styles/Hw10";

export const Hw17 = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);
  useEffect(() => {
    return localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const isInContacts = contacts.find(
      (contact) =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );

    if (!isInContacts) {
      setContacts([contacts, newContact]);
    } else {
      alert(`${newContact.name} is already in your contacts`);
    }
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filterContacts = (value) => {
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  return (
    <Wrapper>
      <SubWrapper>
        <AddContact onSubmit={addContact}></AddContact>
        <Filter value={filter} onChange={filterContacts}></Filter>
      </SubWrapper>
      <ContactsList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      ></ContactsList>
    </Wrapper>
  );
};
