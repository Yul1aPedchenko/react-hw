import { Component } from "react";
import {
  ImageGalleryWrapper,
  ImageGalleryImage,
} from "../Styles/ImageGalleryItem";

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.largeImg);
  };

  render() {
    const { smallImg } = this.props;
    return (
      <ImageGalleryWrapper
        onClick={this.handleClick}
      >
        <ImageGalleryImage src={smallImg} alt="" />
      </ImageGalleryWrapper>
    );
  }
}
