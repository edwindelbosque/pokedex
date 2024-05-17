import { useState } from "react";

const LIMIT = 5;
const getOffset = <T>(data: T[]) => 5 + data.length;

export const useInfiniteQuery = <T>(queryUrl: string): {
  data: T[],
  loading: boolean,
  error: any,
  loadMore: () => void,
} => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(queryUrl);

  const loadMore = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();

      setData((prev: any) => [...prev, ...result.results]);
      setUrl(`${queryUrl}?limit=${LIMIT}&offset=${getOffset<T>(data)}`);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, loadMore };
};
