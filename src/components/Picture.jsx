import React from "react";

const Picture = ({ isHomePage }) => {
  return (
    <div className="picture-container">
      <h1>Marc GÖTZE</h1>
      <div className={`portrait ${isHomePage ? "slide-in-right" : ""}`}>
        <img
          className="photo"
          src="assets/picture.png"
          alt="Portrait de Marc Götze"
        />
      </div>
    </div>
  );
};

export default Picture;
