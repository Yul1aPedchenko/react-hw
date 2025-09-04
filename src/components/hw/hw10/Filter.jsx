import { Component } from "react";
import { Label, Input } from "./Styles/Filter";

export class Filter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <form>
        <Label>
          Search contact by name
          <Input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={this.props.value}
          onChange={this.handleChange}
        />
        </Label>
      </form>
    );
  }
}
