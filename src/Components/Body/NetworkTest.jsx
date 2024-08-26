import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Body from "./Body.jsx"
const Networktest = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    // const Online = (e) => {
    //   setIsUserOnline(true);
    //   setIsRefreshed(false);
    //   // localStorage.setItem("isUserOnline",isUserOnline)
    // };
    // const Offline = () => {
    //   setIsUserOnline(false);
    //   setIsUserOnline(true);

    // };

    const Refresh = () => {
      setIsRefreshed(true);
      return (<Error/>);
    }

    // window.addEventListener('online',Online);
    // window.addEventListener('offline', Offline);
    window.addEventListener('beforeunload',() => {
         setIsRefreshed(true);
           
    });
    
    return () => {
      // window.removeEventListener('online',Online);
      // window.removeEventListener('offline', Offline);
     
    };
  }, []);

  return (
      // isUserOnline ? <Body/> : <Error/>
      // (isRefreshed && !isUserOnline )? <Error/> : <Body/>
      isRefreshed ? <Error/> : <Error/>
      
  );
}


export default Networktest