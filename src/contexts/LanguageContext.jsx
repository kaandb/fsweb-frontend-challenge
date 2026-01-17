import { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { data } from '../data/data';

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useLocalStorage('lang', 'tr');
  
  const content = data[lang];

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};