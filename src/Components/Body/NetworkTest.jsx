import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Body from "./Body.jsx"
const Networktest = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);

  useEffect(() => {
    const Online = () => setIsUserOnline(true);
    const Offline = () => setIsUserOnline(false);

    window.addEventListener('online', Online);
    window.addEventListener('offline', Offline);

    return () => {
      window.removeEventListener('online', Online);
      window.removeEventListener('offline', Offline);
    };
  }, []);

  return (
      isUserOnline ? <Body/> : <Error/>
  );
}


export default Networktest