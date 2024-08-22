import React from "react";
import icon2 from "../../assets/Icon2.png";
import "./Footer.css";
import LN from "../../assets/LN.png";
import FB from "../../assets/FB.png";
import TW from "../../assets/TW.png";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-head">
        <div className="brand flex justify-center">
          <img src={icon2} alt="" className="icon" />
          <h2 className="name text-white">Positivus</h2>
        </div>
        <div className="Menu">
          <ul className="menuItems">
            <li className="listItems">About Us</li>
            <li className="listItems">Services</li>
            <li className="listItems">Use Cases</li>
            <li className="listItems">Pricing</li>
            <li className="listItems ">Blog</li>
          </ul>
        </div>
        <div className="first-socials flex justify-between">
          <img src={LN} alt="" />
          <img src={FB} alt="" />
          <img src={TW} alt="" />
        </div>
      </div>
      <div className="footer-form mt-5">
        <div className="p-0 Address m-0">
          <h5>Contact us: </h5>
          <div className="text-white address">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p className="m-0">
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className="email">
          <input type="text" placeholder="Email" />
          <button>Subscribe to news</button>
        </div>
      </div>
      <div className="second-socials">
        <div>
          <img src={LN} className="ln" alt="" />
          <img src={FB} className="ln" alt="" />
          <img src={TW} className="ln" alt="" />
          
        </div>
      </div>
      <hr style={{ color: "lightgray" }} />
      <div className="copyright text-white">
        <p>© 2023 Positivus. All Rights Reserved</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
