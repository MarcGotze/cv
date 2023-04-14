import React from "react";
import Picture from "./Picture";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Développeur Junior d'application JS/React.js</h1>
        <ul>
          <li>Contrat recherché : CDD/CDI</li>
          <li>Zone de recherche : Rhône ouest & Loire est</li>
        </ul>
      </div>
      <Picture />
    </header>
  );
};

export default Header;
