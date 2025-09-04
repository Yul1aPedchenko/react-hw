import { Component } from "react";
import { Item, DeleteButton } from "./Styles/ContactsList";

export class ContactsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map((contact) => {
            return (
              <Item key={contact.id}>
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.number}</p>
                </div>
                 <DeleteButton onClick={() => this.props.deleteContact(contact.id)}>Delete</DeleteButton>
              </Item>
            );
          })}
        </ul>
      </div>
    );
  }
}
