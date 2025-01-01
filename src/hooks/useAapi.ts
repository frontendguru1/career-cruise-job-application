import { useEffect, useState } from "react";

export const useAPi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(`Something went wrong ${response?.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(
        `Something went wrong ${error instanceof Error ? error.message : error}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
