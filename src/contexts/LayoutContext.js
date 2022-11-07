import { useState, createContext } from 'react';

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
  // progress bar
  const [progress, setProgress] = useState(0);
  const updateProgress = () => {
    setProgress(progress + 1);
  };

  return (
    <LayoutContext.Provider
      value={{
        progress,
        updateProgress,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
