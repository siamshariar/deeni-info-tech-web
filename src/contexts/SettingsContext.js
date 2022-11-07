import { useState, useEffect, createContext } from 'react';
import { settings as defaultSettings } from '../lib/settings';

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  // state declare
  const [settings, setSettings] = useState(defaultSettings);

  // first render
  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    const newSettings =
      savedSettings === null ? defaultSettings : JSON.parse(savedSettings);
    initSettings(newSettings);
    setSettings(newSettings);
  }, []);

  // helper functions
  const saveToLocalStorage = (settings) => {
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  const initSettings = (settings) => {
    // init mode
    document.body.setAttribute('class', settings.mode);
  };

  // change settings functions
  const changeMode = (mode) => {
    document.body.setAttribute('class', mode);
    const newSettings = { ...settings, ['mode']: mode };
    saveToLocalStorage(newSettings);
    setSettings(newSettings);
  };

  // const changeNotification = (status) => {
  //   const newSettings = { ...settings, ['notification']: status };
  //   saveToLocalStorage(newSettings);
  //   setSettings(newSettings);
  // };

  const resetSettings = () => {
    initSettings(defaultSettings);
    saveToLocalStorage(defaultSettings);
    setSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        mode: settings.mode,
        changeMode,
        // notification: settings.notification,
        // changeNotification,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
