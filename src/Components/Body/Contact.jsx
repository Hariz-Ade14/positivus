import React from "react";
import "./Body.css";

import contactImg from "../../assets/contactImg.png";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="contactHead">
        <h1
          style={{
            background: "rgba(185, 255, 102, 1)",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          Contact
        </h1>
        <p className="mx-4 mt-3">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="contactBody">
        <form>
          <div className="p-0 radioDiv flex align-middle justify-between">
            <div
              className="p-0 flex align-middle justify-between"
              style={{ width: "fit-content" }}
            >
              <input type="radio" />
              <p className="mx-3 mt-1">Say Hi</p>
            </div>
            <div
              className="p-0 flex align-middle justify-between"
              style={{ width: "fit-content" }}
            >
              <input type="radio" />
              <p className="mx-3 mt-1">Get a Quote</p>
            </div>
          </div>

          <label>Name</label>
          <br />
          <input type="text" placeholder="Name" />
          <br />
          <label>Message</label>
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <label>Message</label>
          <br />
          <textarea
            placeholder="Message"
            style={{ height: "200px" }}
          ></textarea>

          <button className="subbutn1">Send Message</button>
        </form>

        <div className="contact-img">
          <img src={contactImg} alt="" />
        </div>
      </div>
      <button className="subbutn2">Send Message</button>
    </div>
  );
};

export default Contact;
