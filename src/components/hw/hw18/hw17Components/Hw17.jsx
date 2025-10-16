import { useState, useEffect, useRef } from "react";
import { AddContact } from "./AddContact";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import { Wrapper, SubWrapper } from "./Styles/Hw10";
import { ContactsContext } from "../ContactsContext";

export const Hw17 = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const filterRef = useRef(null); 

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
    const isInContacts = contacts.find(
      (contact) =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    );

    if (!isInContacts) {
      setContacts([...contacts, newContact]);
      setTimeout(() => filterRef.current?.focus(), 200); 
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


  const contextValue = {
    contacts,
    addContact,
    deleteContact,
    filter,
    filterContacts,
    getVisibleContacts,
    filterRef, 
  };

  return (
    <ContactsContext.Provider value={contextValue}>
      <Wrapper>
        <SubWrapper>
          <AddContact />
          <Filter />
        </SubWrapper>
        <ContactsList />
      </Wrapper>
    </ContactsContext.Provider>
  );
};
