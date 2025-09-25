import { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryWrapper } from "../Styles/ImageGallery";

export class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ImageGalleryWrapper>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            onClick={onImageClick}
          />
        ))}
      </ImageGalleryWrapper>
    );
  }
}
