import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Body from "./Body.jsx"
const Networktest = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);

  useEffect(() => {
    // const Online = (e) => {
    //   setIsUserOnline(true);
    //   console.log(e.type);
    // };
    const Offline = () => setIsUserOnline(false);

    window.addEventListener('online',(e) => {
      setIsUserOnline(true);
      console.log(e.target);
    });
    window.addEventListener('offline', Offline);

    // const hasRefreshed = e.type;
 

    // if(!isUserOnline && hasRefreshed ){
    //   window.addEventListener('beforeunload', Offline);
    // } 

    return () => {
      window.removeEventListener('online', (e) => {
        setIsUserOnline(true);
        console.log(e.type);
      });
      window.removeEventListener('offline', Offline);
      // window.addEventListener('beforeunload', Offline);
    };
  }, []);

  return (
      isUserOnline ? <Body/> : <Error/>
  );
}


export default Networktest