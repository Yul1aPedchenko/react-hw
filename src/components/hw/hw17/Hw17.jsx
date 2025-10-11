import { useState, useEffect } from "react";
import { AddContact } from "./AddContact";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import { Wrapper, SubWrapper } from "./Styles/Hw10";

export const Hw17 = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contactsState");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contactsState", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (newContact) => {
    const isInContacts = contacts.find((contact) => {
      return (
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim() || contact.number.trim() === newContact.number.trim()
      );
    });

    if (!isInContacts) {
      setContacts([...contacts, newContact]);
    } else {
      alert(`${newContact.name} or ${newContact.number} is already in your contacts`);
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
