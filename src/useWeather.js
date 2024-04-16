import { useMemo } from "react";
import { getWeather } from "./api/requests";
import useFetch from "./api/useFetch";

const useWeather = (string) => {
  const request = useMemo(() => getWeather(string), []);
  return useFetch(...request);
};

export default useWeather;