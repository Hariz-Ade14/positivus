import React from "react";

const Team = () => {
  return (
    <div className="Team">
      <div className="flex align-middle jsutify-between">
        <h1
          style={{
            background: "rgba(185, 255, 102, 1)",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          Team
        </h1>
        <p className="mx-3 mt-3">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="Team-members container">
           <div className="row">
                <div className="col-3">
                    <div>
                        
                    </div>
                    <p></p>
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
           </div>
      </div>
    </div>
  );
};

export default Team;
