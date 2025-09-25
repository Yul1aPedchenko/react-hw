import { Component } from "react";
import { LoadMoreButton } from "../Styles/Button";

export class Button extends Component {
  render() {
    return <LoadMoreButton onClick={this.props.onClick}>Load more</LoadMoreButton>;
  }
}
