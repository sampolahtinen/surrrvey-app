import { useEffect, useState } from "react";

export function useFetch(
  callback: (params?: any) => Promise<any>,
  params?: any
) {
  const [results, setResults] = useState<any>({});
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callback(params);
        setResults(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [params, callback]);
  return [isLoading, results, error];
}
