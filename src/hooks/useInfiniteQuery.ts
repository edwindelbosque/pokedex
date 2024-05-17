import { useState } from "react";

export const useInfiniteQuery = (queryUrl: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(queryUrl);

  const loadMore = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();

      setData((prev: any) => [...prev, ...result.results]); // Assuming 'results' contains the list of abilities
      setUrl(`${queryUrl}?limit=5&offset=${data.length + 5}`); // Update the URL for the next load
    } catch (err: any) {
      setError(err);
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, loadMore };
};
