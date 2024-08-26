import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Body from "./Body.jsx"
const Networktest = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);

  useEffect(() => {
    const Online = () => {
      setIsUserOnline(true);
      localStorage.setItem()
    };
    const Offline = () => setIsUserOnline(false);

    window.addEventListener('online', Online);
    window.addEventListener('offline', Offline);

    const hasRefreshed = window.addEventListener('beforeunload', Offline);

    if(!isUserOnline && hasRefreshed ){
      window.addEventListener('beforeunload', Offline);
    } 

    return () => {
      window.removeEventListener('online', Online);
      window.removeEventListener('offline', Offline);
      // window.addEventListener('beforeunload', Offline);
    };
  }, []);

  return (
      isUserOnline ? <Body/> : <Error/>
  );
}


export default Networktest