import React, { useState, useEffect, useCallback } from 'react';


const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('current-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  };

export default function useDarkTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  const colorTheme = theme === 'dark' ? 'light':'dark';

  useEffect(() => {
      console.log("hi")
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('current-theme', theme);
  }, [colorTheme, theme]);

  
  console.log("theme", theme)
  return [theme, setTheme];
}