import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cover from "../../Assets/Projects/projet.jpg";
import cover2 from "../../Assets/Projects/projet2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. (In progress...)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover}
              isBlog={false}
              title="Sama ecommerce website"
              description="Une plateforme d'e-commerce moderne et élégante construite avec React. 
              Découvrez une expérience d'achat fluide avec une interface intuitive et réactive."
              link="https://github.com/blackstarsama/Sama-Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover2}
              isBlog={false}
              title="Admin Dashboard"
              description="Un tableau de bord moderne, fluide et responsive développé avec React.js, inspiré des interfaces professionnelles d’administration. 
              Il intègre un mode sombre, des graphiques interactifs, et une gestion dynamique des données (ex : commandes récentes)."
              link="https://github.com/blackstarsama/admin-dash-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover}
              isBlog={false}
              title="Project Name"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
