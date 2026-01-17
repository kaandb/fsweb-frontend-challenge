import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      
      if (!item || item === "undefined") {
        return initialValue;
      }
      
      return JSON.parse(item);
    } catch (error) {
      console.warn(`LocalStorage hatası (${key}):`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`LocalStorage kaydetme hatası (${key}):`, error);
    }
  };

  return [storedValue, setValue];
};