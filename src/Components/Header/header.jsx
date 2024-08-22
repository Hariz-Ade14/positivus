import React from "react";
import icon from "../../assets/Icon.jpg";
import "./Header.css";
import { HiOutlineBars3 } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img src={icon} alt="" className="icon" />
        <h2 className="name">Positivus</h2>
      </div>
      <div className="menu">
        <ul className="menu-items ">
          <li className="list-items">About Us</li>
          <li className="list-items">Services</li>
          <li className="list-items">Use Cases</li>
          <li className="list-items">Pricing</li>
          <li className="list-items ">Blog</li>
        </ul>
        <button className="butn">Request a quote</button>
      </div>
      <div className="bars">
        <HiOutlineBars3 size={40} />
      </div>
    </div>
  );
};

export default Header;
