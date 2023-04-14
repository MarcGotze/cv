import React from "react";

const Asides = () => {
  return (
    <div className="asides">
      <aside>
        <div className="block-color">
          <h1>PROJETS</h1>
          <ul>
            <li>
              <a
                href="https://github.com/MarcGotze"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              Site personnel :{" "}
              <a href="https://marcgotze.fr" target="_blank" rel="noreferrer">
                https://marcgotze.fr
              </a>
            </li>
          </ul>
        </div>
        <div className="block-color">
          <h1>LANGUES</h1>
          <p>
            <b>Anglais</b> - intermédiaire, B2
          </p>
        </div>
        <div className="block-color">
          <h1>HOBBIES</h1>
          <ul>
            <h2>Musique</h2>
            <li>Production musicale, MAO</li>
            <li>Guitare, basse, clavier (depuis 15 années)</li>
          </ul>
          <ul>
            <h2>Ludophile</h2>
            <li>Jeu de plateau</li>
            <li>Jeu vidéo</li>
          </ul>
          <ul>
            <h2>Cinéphile</h2>
            <li>Cinéma de genre</li>
            <li>Animation</li>
          </ul>
          <h2>Podcast</h2>
          <p>
            "Might & Critiques" podcast sur le jeu vidéo, on-air
            multiplateformes depuis Novembre 2021
          </p>
        </div>
        <br />
        <div className="contact block-color">
          <h1>CONTACT</h1>
          <h2>06.25.77.62.28</h2>
          <a href="mailto: marc.gotze@gmail.com">marc.gotze@gmail.com</a>
          <br />
          <a
            href="https://www.linkedin.com/in/marc-g%C3%B6tze-95750426b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p>34 ans, pacsé</p>
          <p>
            69490 Vindry-sur-Turdine <br /> Permis B, véhiculé
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Asides;
