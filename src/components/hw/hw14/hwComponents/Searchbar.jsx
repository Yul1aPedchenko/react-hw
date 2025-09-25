import { Component } from "react";
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "../Styles/Searchbar";
import { IoSearch } from "react-icons/io5";

export class Searchbar extends Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() === "") {
      return;
    } else {
      this.props.onSubmit(input.trim());
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <IoSearch />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
