import { useCallback, useState } from "react";

import isJsonString from "@/utils/isJsonString";

const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const makeRequest = useCallback(async (requestFn: () => Promise<unknown>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await requestFn();
      return response as Response;
    } catch (err) {
      const error = err as Error;
      if (error.message === "Failed to fetch") {
        setError(new Error("Unable to connect to the server"));
      }
      if (!isJsonString(error.message)) return setError(error);
      const jsonError = JSON.parse(error.message);
      const combinedErrorMessage = jsonError.errors
        .map((e: { message: string }) => e.message)
        .join("\n");

      setError(new Error(combinedErrorMessage));
    } finally {
      setLoading(false);
    }
  }, []);

  return { makeRequest, loading, error };
};
export default useRequest;
