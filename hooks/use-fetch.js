import { useState } from "react";

const useFetch = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendReq = async (req, transformData) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(req.url,{
        method: req.method || 'GET',
        body: req.body ? JSON.stringify(req.body) : null,
        headers: req.headers || {}
      }
        
        );
      if (!response.ok) {
        throw new Error("fallo en solicitud: " + response.status);
      }
      const data = await response.json();
      const resultData = transformData(data);
      setResult(resultData);
    } catch (error) {
      setError("No disponible, " + error.message);
    }
    setLoading(false);
  };
  
    return {
      result,
      error,
      loading,
      sendReq
    };
}

export default useFetch;
