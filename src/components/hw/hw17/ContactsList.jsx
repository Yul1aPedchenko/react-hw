import { Component } from "react";
import { Item, DeleteButton } from "./Styles/ContactsList";

export const ContactsList = ({contacts, deleteContact}) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <Item key={contact.id}>
              <div>
                <h3>{contact.name}</h3>
                <p>{contact.number}</p>
              </div>
              <DeleteButton
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </DeleteButton>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
