'use client';

import React, { useState, useEffect, useCallback, createContext } from 'react';

export const WindowContext = createContext({
  clientWidth: 0,
  clientHeight: 0,
});

export const WindowContextProvider = ({ children }) => {
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const updateDimensions = useCallback(() => {
    setClientWidth(window.innerWidth || 0);
    setClientHeight(window.innerHeight || 0);
  }, []);

  useEffect(() => {
    updateDimensions(); // Set initially

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  return (
    <WindowContext.Provider value={{ clientWidth, clientHeight }}>
      {children}
    </WindowContext.Provider>
  );
};
