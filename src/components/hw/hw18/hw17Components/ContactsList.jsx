import { Item, DeleteButton } from "./Styles/ContactsList";
import { useContacts } from "../ContactsContext";

export const ContactsList = () => {
  const { getVisibleContacts, deleteContact } = useContacts();

  const contacts = getVisibleContacts();

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Item key={contact.id}>
            <div>
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>
            </div>
            <DeleteButton onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteButton>
          </Item>
        ))}
      </ul>
    </div>
  );
};
