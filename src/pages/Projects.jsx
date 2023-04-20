import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Card from "../components/Card";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("../assets/data.json").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Header isHomePage={false} />
      <Navigation />
      <section className="projects block-color">
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
