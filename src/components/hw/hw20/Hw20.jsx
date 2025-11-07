import { useState, useCallback } from "react";
import { Searchbar } from "./hwComponents/Searchbar";
import { ImageGallery } from "./hwComponents/ImageGallery";
import { Button } from "./hwComponents/Button";
import { Loader } from "./hwComponents/Loader";
import { Modal } from "./hwComponents/Modal";
import { usePixabaySearch } from "./hooks/usePixabaySearch";

export const Hw20 = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState(null);

  const  { images, isLoading, hasMore, setImages } = usePixabaySearch(query,page);

  const handleSearchSubmit = useCallback((newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const openModal = useCallback((url) => {
    setLargeImageURL(url);
  }, []);

  const closeModal = useCallback(() => {
    setLargeImageURL(null);
  }, []);

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />

      {isLoading && <Loader />}

      {hasMore && !isLoading && images.length > 0 && <Button onClick={handleLoadMore} />}

      {largeImageURL && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
    </div>
  );
};
