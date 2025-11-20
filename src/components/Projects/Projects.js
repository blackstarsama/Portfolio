import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cover from "../../Assets/Projects/projet.jpg";
import cover2 from "../../Assets/Projects/projet2.png";
import cover3 from "../../Assets/Projects/projet3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover3}
              isBlog={false}
              title="Ecommerce website"
              description="A modern and elegant e-commerce platform built with React. 
              Experience seamless shopping with an intuitive and responsive interface."
              link="https://github.com/blackstarsama/Sama-Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover2}
              isBlog={false}
              title="Admin Dashboard"
              description="A modern, fluid, and responsive dashboard developed with React.js, 
              inspired by professional administration interfaces. 
              It includes a dark mode, interactive charts, and dynamic data management (e.g., recent orders)."
              link="https://github.com/blackstarsama/admin-dash-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover}
              isBlog={false}
              title="Project Name"
              description="You can find other projects that are currently being developed via my Github."
              link="https://github.com/blackstarsama"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
