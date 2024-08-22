import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const WorkInProgress = () => {
  const [showContentOne, setShowContentOne] = useState(false);
  const [showContentTwo, setShowContentTwo] = useState(false);
  const [showContentThree, setShowContentThree] = useState(false);
  const [showContentFour, setShowContentFour] = useState(false);
  const [showContentFive, setShowContentFive] = useState(false);
  const [showContentSix, setShowContentSix] = useState(false);
  const [color, setColor] = useState("rgba(243, 243, 243, 1)");

  const showContentFunc = (num, setNum) => {
    if (!num) {
      setNum(true);
    }
  };

  const hideContentFunc = (num, setNum) => {
    if (num) {
      setNum(false);
      setColor("rgba(243, 243, 243, 1)");
    }
  };

  return (
    <div className="Wip">
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number">01</h1>
            <p className="mx-4 title">Consultation</p>
          </div>
          <div className="plusIcon">
            {showContentOne ? (
              <FiMinus
                size={40}
                onClick={() => {
                  hideContentFunc(showContentOne, setShowContentOne);
                }}
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() => {
                  showContentFunc(showContentOne, setShowContentOne);
                }}
              />
            )}
          </div>
        </div>

        {showContentOne && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number">02</h1>
            <p className="mx-4 title">Research and Strategy Development</p>
          </div>
          <div className="plusIcon">
            {showContentTwo ? (
              <FiMinus
                size={40}
                onClick={() => {
                  hideContentFunc(showContentTwo, setShowContentTwo);
                  setColor("rgba(243, 243, 243, 1");
                }}
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() =>
                  showContentFunc(showContentTwo, setShowContentTwo)
                }
              />
            )}
          </div>
        </div>

        {showContentTwo && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number">03</h1>
            <p className="mx-4 title">Implementation</p>
          </div>
          <div className="plusIcon">
            {showContentThree ? (
              <FiMinus
                size={40}
                onClick={() =>
                  hideContentFunc(showContentThree, setShowContentThree)
                }
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() =>
                  showContentFunc(showContentThree, setShowContentThree)
                }
              />
            )}
          </div>
        </div>

        {showContentThree && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number ">04</h1>
            <p className="mx-4 title">Monitoring and Optimization</p>
          </div>
          <div className="plusIcon">
            {showContentFour ? (
              <FiMinus
                size={40}
                onClick={() =>
                  hideContentFunc(showContentFour, setShowContentFour)
                }
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() =>
                  showContentFunc(showContentFour, setShowContentFour)
                }
              />
            )}
          </div>
        </div>

        {showContentFour && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number">05</h1>
            <p className="mx-4 title">Reporting and Communication</p>
          </div>
          <div className="plusIcon">
            {showContentFive ? (
              <FiMinus
                size={40}
                onClick={() =>
                  hideContentFunc(showContentFive, setShowContentFive)
                }
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() =>
                  showContentFunc(showContentFive, setShowContentFive)
                }
              />
            )}
          </div>
        </div>

        {showContentFive && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
      <div className="wipDiv mb-3" style={{ background: color }}>
        <div className="flex align-middle justify-between">
          <div
            className="flex align-middle justify-between p-0"
            style={{ width: "fit-content" }}
          >
            <h1 className="number">06</h1>
            <p className="mx-4 title">Continual Improvement</p>
          </div>
          <div className="plusIcon">
            {showContentSix ? (
              <FiMinus
                size={40}
                onClick={() =>
                  hideContentFunc(showContentSix, setShowContentSix)
                }
              />
            ) : (
              <BsPlusLg
                size={40}
                onClick={() =>
                  showContentFunc(showContentSix, setShowContentSix)
                }
              />
            )}
          </div>
        </div>

        {showContentSix && (
          <div>
            <hr style={{ height: "2px", background: "black" }} />
            <p>
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
