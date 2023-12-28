import { useCallback, useEffect, useState } from "react";

import useRequest from "@/hooks/useRequest";

import getGiftsRequest from "../services/getGiftsRequest";
import { gift } from "../types/gift";

const useGift = ({ numberOfGiftToGet = 3 }: { numberOfGiftToGet?: number }) => {
  const [gifts, setGifts] = useState<gift[]>([]);
  const { makeRequest, error, loading } = useRequest();
  const [dataError, setDataError] = useState<Error | null>(null);

  const getGifts = useCallback(async () => {
    try {
      const response = await makeRequest(() =>
        getGiftsRequest(numberOfGiftToGet)
      );
      if (!response || !response.ok) return;
      const resultGifts = await response.json();
      if (!Array.isArray(resultGifts)) {
        throw new Error("Format of the data is not correct");
      }
      setGifts(resultGifts);
    } catch (err) {
      const error = err as Error;
      console.error(err);
      setDataError(error);
    }
  }, [makeRequest, numberOfGiftToGet]);
  useEffect(() => {
    getGifts();
  }, [getGifts]);

  return { gifts, getGifts, error, loading, dataError };
};
export default useGift;
