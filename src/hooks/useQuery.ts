import { useState, useEffect } from 'react';

export const useQuery = <T>(url: string): { data: T | undefined, loading: boolean, error: any } => {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
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
    }, [url]);

    return { data, loading, error };
};
