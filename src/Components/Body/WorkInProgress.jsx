import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const WorkInProgress = () => {
  const [showContents, setShowContents] = useState(Array(6).fill(false));
  const [color, setColor] = useState("rgba(243, 243, 243, 1)");

  const toggleContent = (index) => {
    setShowContents((prev) => {
      const newShowContents = [...prev];
      newShowContents[index] = !newShowContents[index];
      return newShowContents;
    });

    setColor(showContents[index] ? "rgba(243, 243, 243, 1)" : "green"); // #000 is a placeholder

  };

  const contentData = [

    { title: "Consultation", description: "Description for Consultation" },

    { title: "Research and Strategy Development", description: "Description for Research" },
    { title: "Implementation", description: "Description for Implementation" },

    { title: "Monitoring and Optimization", description: "Description for Monitoring" },
    { title: "Reporting and Communication", description: "Description for Reporting" },

    { title: "Continual Improvement", description: "Description for Improvement" },

  ];

  return (
    <div className="Wip">
      {contentData.map((content, index) => (

        <div className="wipDiv mb-3" style={{ background: color }} key={index}>

          <div className="flex align-middle justify-between">

            <div className="flex align-middle justify-between p-0" style={{ width: "fit-content" }}>
              <h1 className="number">{String(index + 1).padStart(2, '0')}</h1>
              <p className="mx-4 title">{content.title}</p>
            </div>
            <div className="plusIcon">
              {showContents[index] ? (

                <FiMinus size={40} onClick={() => toggleContent(index)} aria-expanded="true" />
              ) : (
                <BsPlusLg size={40} onClick={() => toggleContent(index)} aria-expanded="false" />
              )}
            </div>
          </div>
          {showContents[index] && (

            <div>
              <hr style={{ height: "2px", background: "black" }} />

              <p>{content.description}</p>

            </div>

          )}

        </div>

      ))}
    </div>
  );
};

export default WorkInProgress