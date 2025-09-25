import { Component } from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "../Styles/Loader";
export class Loader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <ClipLoader color="#3f51b5" size={50} />
      </LoaderWrapper>
    );
  }
}
