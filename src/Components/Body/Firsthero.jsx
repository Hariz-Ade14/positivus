import React from "react";
import img from "../../assets/Illustration.jpg";
import "./Body.css";

const Firsthero = () => {
  return (
    <div className="firsthero">
      <div className="firstherotext">
        <div>
          <h1>
            Navigating the digital landscape for success.
          </h1>
          <img className="firstheroImg_1 m-0" src={img} alt="" />
          <p>
            Our digital marketing agency helps businesses
             grow and succeed online through a range of
             services including SEO, PPC, social media marketing, 
            and content creation.
          </p>
          <button className="firstherobtn">Book a consultation</button>
        </div>
      </div>
      <div>
        <img className="firstheroImg" src={img} alt="" />
      </div>
    </div>
  );
};

export default Firsthero;
