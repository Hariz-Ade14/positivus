import React from "react";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";
import LN from "../../assets/linkedin.png";
import "./Body.css"

const Team = () => {
  return (
    <div className="Team">
      <div className="Teamhead">
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
      <div className="Team-members container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 col-md-4 py-3 p-0">
            <div className="teamMem">
              <div className=" flex align-middle justify-between">
              <img alt="" src={member1} width={"100px"} />
              <div className="memName">
                <div className="">
                  <p>John Doe</p>
                  <p>CEO & Founder</p>
                </div>
              </div>

              <img alt=""
                src={LN}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
              consectetur sit deserunt harum unde placeat quam quisquam sequi,
              alias illum, sapiente maxime odit iusto nulla perferendis itaque
              saepe quo?
            </p>
            </div>
            
          </div>
          <div className="col-12 col-md-4 p-0 p-sm-3">
            <div className="teamMem">
            <div className="flex align-middle justify-between">
              <img alt="" src={member2} width={"100px"} />
              <div className="memName">
                <div className="">
                  <p>John Doe</p>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <img alt=""
                src={LN}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
              consectetur sit deserunt harum unde placeat quam quisquam sequi,
              alias illum, sapiente maxime odit iusto nulla perferendis itaque
              saepe quo?
            </p>
            </div>
            
          </div>
          <div className="col-12 col-md-4 py-3 p-0">
            <div className="teamMem">
              <div className=" flex align-middle justify-between">
                <img alt="" src={member3} width={"100px"} />
                <div className="memName">
                  <div className="">
                    <p>John Doe</p>
                    <p>CEO & Founder</p>
                  </div>
                </div>

                <img alt=""
                  src={LN}
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                />
              </div>
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
                consectetur sit deserunt harum unde placeat quam quisquam sequi,
                alias illum, sapiente maxime odit iusto nulla perferendis itaque
                saepe quo?
              </p>
            </div>
           
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12 col-md-4 py-3 p-0">
            <div className="teamMem">
              <div className=" flex align-middle justify-between">
              <img alt="" src={member4} width={"100px"} />
              <div className="memName">
                <div className="">
                  <p>John Doe</p>
                  <p>CEO & Founder</p>
                </div>
              </div>

              <img alt=""
                src={LN}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
              consectetur sit deserunt harum unde placeat quam quisquam sequi,
              alias illum, sapiente maxime odit iusto nulla perferendis itaque
              saepe quo?
            </p>
            </div>
            
          </div>
          <div className="col-12 col-md-4 p-0 p-sm-3">
            <div className="teamMem">
            <div className="flex align-middle justify-between">
              <img alt="" src={member5} width={"100px"} />
              <div className="memName">
                <div className="">
                  <p>John Doe</p>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <img alt=""
                src={LN}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
              consectetur sit deserunt harum unde placeat quam quisquam sequi,
              alias illum, sapiente maxime odit iusto nulla perferendis itaque
              saepe quo?
            </p>
            </div>
            
          </div>
          <div className="col-12 col-md-4 py-3 p-0">
            <div className="teamMem">
              <div className=" flex align-middle justify-between">
                <img alt="" src={member6} width={"100px"} />
                <div className="memName">
                  <div className="">
                    <p>John Doe</p>
                    <p>CEO & Founder</p>
                  </div>
                </div>

                <img alt=""
                  src={LN}
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                />
              </div>
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id
                consectetur sit deserunt harum unde placeat quam quisquam sequi,
                alias illum, sapiente maxime odit iusto nulla perferendis itaque
                saepe quo?
              </p>
            </div>
           
          </div>
        </div>
      </div>
      <div className="teamBtn">
           <button className="btn text-white p-3 mt-3" style={{borderRadius: '14px' , background: "rgba(25, 26, 35, 1)"}}>See all team </button>
      </div>
    </div>
  );
};

export default Team;
