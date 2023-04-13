import React from "react";

const Picture = () => {
  return (
    <div className="picture-container">
      <h1>Marc GÖTZE</h1>
      <div className="portrait">
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
