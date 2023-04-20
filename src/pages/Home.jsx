import React from "react";
import Header from "../components/Header";
import Experiences from "../components/Experiences";
import Asides from "../components/Asides";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <section className="intro">
        <i>
          "Après 12 années d’expérience professionnelle dans le milieu de la
          planification, je souhaite aujourd’hui m’orienter vers le métier
          passionnant de Développeur Web. Intègre, curieux et à l’écoute, j’aime
          travailler en équipe, échanger les idées et contribuer à la résolution
          de problématiques."
        </i>
      </section>
      <div className="rows-container">
        <Experiences />
        <Asides />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
