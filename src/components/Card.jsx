import React, { useState } from "react";

const Card = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className="card">
      <h2>{project.name}</h2>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative" }}
      >
        <img src={project.image} alt={"Page d'accueil de " + project.name} />
        {showDescription && (
          <div
            style={{
              position: "absolute",
              width: "90%",
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -110%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {project.description}
          </div>
        )}
      </a>
    </div>
  );
};

export default Card;
