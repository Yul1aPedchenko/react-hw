import { Component } from "react";
import { AddContact } from "./AddContact";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import { Wrapper, SubWrapper } from "./Styles/Hw10";

export class Hw10 extends Component {
  state = {
    contacts: [
    ],
    filter: "",
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (newContact) => {
    const isInContacts = this.state.contacts.find(
      (contact) =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );

    if (!isInContacts) {
      this.setState((prev) => ({
        contacts: [...prev.contacts, newContact],
      }));
    } else {
      alert(`${newContact.name} is already in your contacts`);
    }
  };
  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (value) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <SubWrapper>
          <AddContact onSubmit={this.addContact}></AddContact>
          <Filter
            value={this.state.filter}
            onChange={this.filterContacts}
          ></Filter>
        </SubWrapper>
        <ContactsList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        ></ContactsList>
      </Wrapper>
    );
  }
}
