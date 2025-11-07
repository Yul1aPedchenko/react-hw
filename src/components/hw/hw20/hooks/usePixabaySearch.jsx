import { useState, useEffect, useCallback } from "react";
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const API_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

export const usePixabaySearch = (query, page) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  return { images, isLoading, hasMore, setImages };
};
