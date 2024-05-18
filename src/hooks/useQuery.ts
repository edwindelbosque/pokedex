import { useState, useEffect } from 'react';

type UseQueryParams = {
  queryUrl: string;
  skip?: boolean;
};

export const useQuery = <T>({ queryUrl, skip }: UseQueryParams): { data: T | undefined, loading: boolean, error: any } => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (skip) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(queryUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    void fetchData();
  }, [queryUrl, skip]);

  return { data, loading, error };
};
