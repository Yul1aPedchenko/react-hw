import { useState, useEffect, useCallback, useMemo } from "react";
import { Searchbar } from "./hwComponents/Searchbar";
import { ImageGallery } from "./hwComponents/ImageGallery";
import { Button } from "./hwComponents/Button";
import { Loader } from "./hwComponents/Loader";
import { Modal } from "./hwComponents/Modal";

const API_KEY = "49248901-d6c95cf50118914c4de622d87";
const API_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;
export const Hw19 = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const fetchImages = useCallback(async () => {
    if (!query) return;
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`);
      const data = await response.json();

      setImages((prev) => (page === 1 ? data.hits : [...prev, ...data.hits]));

      setHasMore(data.totalHits > page * PER_PAGE);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

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
