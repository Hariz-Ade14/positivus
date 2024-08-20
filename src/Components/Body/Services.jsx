import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";
import card4 from "../../assets/Card4.png";
import card5 from "../../assets/Card5.png";
import card6 from "../../assets/Card6.png";
import card7 from "../../assets/Card7.png";
import { MdArrowOutward } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";

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
          {/* <div className="rows">
            <div className="col-12 col-md-6">
              <img src={card1} className="" alt="" />
            </div>
            <div className="col-12 col-md-6 bg-danger">
              <img src={card1} className="" alt="" />
            </div>
          </div> */}
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
            <h2 className="h2">
              Let's make things
              <br /> happen
            </h2>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="firstherobtn">Get your free proposal</button>
          </div>
          <img src={card7} className="m-0  p-0" alt="" />
        </div>
        <div className="Services" style={{marginTop: "120px"}}>
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
        <div
          style={{ background: "rgba(25, 26, 35, 1)", borderRadius: "45px" }}
          className="mt-5 p-5 flex align-middle justify-between"
        >
          <div className="text-white w-25 p-3">
            <p className="">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales
            </p>
            <div class="flex align-middle justify-between" style={{width:"110px", color:"rgba(185, 255, 102, 1)"}}>
              <span className="fw-bold">Learn More </span>
              <MdArrowOutward size={23} className="fw-bold"/>
            </div>
          </div>
          {/* <TbMinusVertical color="gray" style={{height:"500px"}} /> */}
          {/* <hr style={{color:"red"}}/> */}
          <div style={{background:"gray",height:"210px",width:"3px"}}></div>
          <div className=" text-white w-25 p-3">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div class="flex align-middle justify-between" style={{width:"110px", color:"rgba(185, 255, 102, 1)"}}> 
              <span className="fw-bold">Learn More </span>
              <MdArrowOutward size={23} className="fw-bold"/>
            </div>
          </div>
          <div style={{background:"gray",height:"210px",width:"3px"}}></div>
          <div className=" text-white w-25 p-3">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div class="flex align-middle justify-between" style={{width:"110px", color:"rgba(185, 255, 102, 1)"}}>
              <span className="text-green-rgba(185, 255, 102, 1) fw-bold">Learn More </span>
              <MdArrowOutward size={23} className="fw-bold"/>
            </div>
          </div>
        </div>

        <div className="Services" style={{marginTop: "100px"}}>
          <h3
            style={{
              background: "rgba(185, 255, 102, 1)",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
              Our Working Process
          </h3>
          <p className="p-sm-0 px-2">
               Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      
      </div>
    </>
  );
};

export default Services;
