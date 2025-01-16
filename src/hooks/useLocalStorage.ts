import { useState, useEffect } from "react";

function useLocalStorage(keyName, defaultValue) {
  // Initialize the state with the value from localStorage or the default value
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(keyName);
    return item ? JSON.parse(item) : defaultValue;
  });

  // Update localStorage when the storedValue changes
  useEffect(() => {
    window.localStorage.setItem(keyName, JSON.stringify(storedValue));
  }, [keyName, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
