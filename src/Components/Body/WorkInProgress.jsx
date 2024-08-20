import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const WorkInProgress = () => {
  const [showContent, setShowContent] = useState(false);
    const [color,setColor] = useState("rgba(243, 243, 243, 1)");
  const showContentFunc = () => {
    setShowContent(true);
    setColor("rgba(185, 255, 102, 1)")
  };

  const hideContentFunc = () => {
    setShowContent(false);
    setColor("rgba(243, 243, 243, 1)")
  }

  return (
    <div className="Wip">
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              01
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Consultation
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              02
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Research and Strategy Development
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              03
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Implementation
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              04
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Monitoring and Optimization
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              05
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Reporting and Communication
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{background: color}}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="" style={{ fontSize: "50px" }}>
              06
            </h1>
            <p
              className="mx-4 mt-3"
              style={{ fontSize: "20px", height: "100" }}
            >
              Continual Improvement
            </p>
          </div>
          <div className="plusIcon">
            {showContent ? (
              <FiMinus size={40} onClick={hideContentFunc}/>
            ) : (
              <BsPlusLg size={40} onClick={showContentFunc} />
            )}
          </div>
        </div>

        {showContent && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p style={{ fontSize: "20px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkInProgress;
