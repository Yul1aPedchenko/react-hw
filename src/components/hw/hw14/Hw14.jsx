import { Component } from "react";
import { Searchbar } from "./hwComponents/Searchbar";
import { ImageGallery } from "./hwComponents/ImageGallery";
import { Button } from "./hwComponents/Button";
import { Loader } from "./hwComponents/Loader";
import { Modal } from "./hwComponents/Modal";

const API_KEY = "49248901-d6c95cf50118914c4de622d87";
const API_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;
export class Hw14 extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    const { query, page } = this.state;
    if (!query) return;

    this.setState({ isLoading: true });

    try {
      const r = await fetch(
        `${API_URL}?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`
      );

      const data = await r.json();
      this.setState((prev) => ({
        images: page === 1 ? data.hits : [...prev.images, ...data.hits],
      }));
      console.log(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  handleSearchSubmit = (newQuery) => {
    this.setState({ query: newQuery, page: 1, images: [] });
  };
  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (url) => {
    this.setState({ largeImageURL: url });
  };
  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, isLoading, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
