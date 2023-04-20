import React from "react";

const Experiences = () => {
  return (
    <div className="articles">
      <article className="competences block-color">
        <h1>COMPETENCES</h1>
        <h2>Développement Web</h2>
        <p>
          Définition des spécifications techniques. Intégration front-end et
          back-end dans le respect des normes d’accessibilités et de bonnes
          pratiques
        </p>
        <div className="competence__listes">
          <ul>
            <h2>Stack technique</h2>
            <li>HTML5/CSS3</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Git</li>
          </ul>
          <ul>
            <h2>Tools</h2>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
            <li>MongoDB Compass</li>
            <li>Postman</li>
            <li>Fork</li>
            <li>Ngrok</li>
          </ul>
        </div>
      </article>
      <article className="formation block-color">
        <h1>FORMATION</h1>
        <p>
          <span className="year">2022 : </span>
          <b>
            Développeur Web, Openclassrooms (Titre RNCP de niveau 5, bac +2)
          </b>
        </p>
        <ul>
          <li>
            Front-end : construction site web responsive & dynamique avec HTML,
            CSS, JavaScript et React
          </li>
          <li>
            Back-end : construction API sécurisée et base de données avec
            NodeJS, Express, MongoDB
          </li>
          <li>Optimisation et maintenance sites web existants</li>
        </ul>
      </article>
      <article className="experiences_pro block-color">
        <h1>EXPERIENCES PROFESSIONNELLES</h1>
        <p>
          <span className="year">2010 - 2022 : </span>
          <b>Planificateur Expert, Régie Networks / groupe NRJ</b>
        </p>
        <ul>
          <p>
            En charge de la planification des spots publicitaires, pôle
            Rhône-Alpes :
          </p>
          <li>
            Gestion du planning de diffusion, vérification de la conformité des
            demandes, optimisation des plans médias, réservation des campagnes
            et suivi de la diffusion des campagnes publicitaires
          </li>
          <li>
            Conseil et accompagnement des commerciaux dans l’optimisation de
            leurs ventes médias
          </li>
          <li>
            Enregistrement et traitement sonore de fiches audio / spots
            publicitaires
          </li>
        </ul>
        <p>
          <span className="year">2009 - 2010 : </span>
          <b>Grande Distribution et Restauration Rapide</b>
        </p>
        <p>
          Diverses expériences courtes en Grande Distribution (Intermarché,
          Jardiland) et Restauration Rapide (Subway, MacDonald).
        </p>
      </article>
      <article className="experiences_ext block-color">
        <h1>EXPERIENCES EXTRA-PROFESSIONNELLES</h1>
        <p>
          <span className="year">2017 - 2018 : </span>
          <b>Chargé de communication, Apathia Records</b>
        </p>
        <p>
          En charge de la communication et de la promotion du label de musique
          indépendant, Apathia Records. Co-développement de la maquette du site
          web officiel en HTML5/PHP dans le cadre du stage organisé par le
          GRETA.
        </p>
        <p>
          <span className="year">2014 - 2017 : </span>
          <b>Bénévole, EXTRA</b>
        </p>
        <p>
          En charge de la sécurisation d’évènements sportifs (Lyon Free VTT,
          Lyon Urban Trail, Course SaintéLyon).
        </p>
      </article>
    </div>
  );
};

export default Experiences;
