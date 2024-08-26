import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Body from "./Body.jsx"
const Networktest = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);
  const [isRefreshed, setIsRefreshed] = useState(<Error/>);

  useEffect(() => {
    const Online = (e) => {
      setIsUserOnline(true);
      setIsRefreshed(<Body/>);
      // localStorage.setItem("isUserOnline",isUserOnline)
    };
    const Offline = () => {
      setIsUserOnline(false);
      

    };

    const Refresh = () => {
      setIsRefreshed(<Error/>);
    }

    window.addEventListener('online',Online);
    window.addEventListener('offline', Offline);
    window.addEventListener('beforeunload', Refresh);
    
    return () => {
      window.removeEventListener('online',Online);
      window.removeEventListener('offline', Offline);
     
    };
  }, []);

  return (
      isUserOnline ? <Body/> : <Error/>
  );
}


export default Networktest