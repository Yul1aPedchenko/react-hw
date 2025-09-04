import { Component } from "react";
import { FormWrapper, Label, Input, AddButton } from "./Styles/AddContact";
export class AddContact extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({
      id: Date.now().toString(),
      name: name,
      number: number,
    });
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            placeholder="Phone number"
            value={this.state.number}
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </FormWrapper>
    );
  }
}
