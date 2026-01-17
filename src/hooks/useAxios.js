import { useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reqres.in/api', 
  timeout: 5000, 
});

export default function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const req = async ({ url, method = 'GET', data: payload = null }) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await instance({
        url,
        method,
        data: payload,
      });
      
      setData(response.data);
      setLoading(false);
      return response; 
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err; 
    }
  };

  return { req, data, error, loading };
};