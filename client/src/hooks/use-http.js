import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch(requestConfig.url, {
      //   method: requestConfig.method ? requestConfig.method : 'GET',
      //   headers: requestConfig.headers ? requestConfig.headers : {},
      //   body: requestConfig.body ? requestConfig.body : null,
      // });
      const response = await fetch(requestConfig.url, {...requestConfig});
      
      if (!response.ok) {
        let responseBody = await response.json() || {};
        throw new Error(responseBody.message);
      }

      const data = await response.json() || {};
      
      console.log(data);
      
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
