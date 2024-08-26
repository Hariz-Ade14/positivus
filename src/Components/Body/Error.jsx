import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import "./Body.css"
const Error = () => {
  return (
    <div className="error">
        <div className="error-div">
             <div>
                 <p>Offline,check network status</p>
                  <MdOutlineErrorOutline size={300}/>
             </div>
             
        </div>
      
    </div>
  );
};

export default Error;
