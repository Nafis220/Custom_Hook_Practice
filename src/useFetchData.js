import { useEffect, useState } from "react";

import React from "react";

export default function useFetchData(url, cb) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (cb) {
        setState(cb(data));
      } else {
        setState(data);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return {
    state,
    loading,
    error,
  };
}
