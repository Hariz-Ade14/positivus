import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";
import card4 from "../../assets/Card4.png";
import card5 from "../../assets/Card5.png";
import card6 from "../../assets/Card6.png";
import card7 from "../../assets/Card7.png";

const Services = () => {
  return (
    <>
      <div className="ServicesBody">
        <div className="Services">
          <h1
            style={{
              background: "rgba(185, 255, 102, 1)",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            Services
          </h1>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="services-content">
          <div className="rows">
            <div className="col-12 col-md-6 bg-dark">
              <img src={card1} className="" alt="" />
            </div>
            <div className="col-12 col-md-6 bg-danger">
              <img src={card1} className="" alt="" />
            </div>
            
          </div>
          <div className="rows">
            <img src={card3} className="" alt="" />
            <img src={card4} className="" alt="" />
          </div>
          <div className="rows">
            <img src={card5} className="" alt="" />
            <img src={card6} className="" alt="" />
          </div>
        </div>
        <div className="lmw p-0">
          <div>
            <h2 className="h2-1">Let's make things happen</h2>
            <h2 className="h2">Let's make things<br/> happen</h2>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="firstherobtn">Get your free proposal</button>
          </div>
          <img src={card7} className="m-0  p-0" alt="" />
        </div>
        <div className="Services mt-sm-5 mt-5">
          <h3
            style={{
              background: "rgba(185, 255, 102, 1)",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            Case Studies
          </h3>
          <p className="p-sm-0 px-2">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
