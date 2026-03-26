import React from "react";
import { Col, Row } from "react-bootstrap";
/* import { CgCSharp } from "react-icons/cg"; */
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiBootstrap,
  DiMysql,
  DiCss3,
} from "react-icons/di";
import { SiTensorflow, SiCsharp } from "react-icons/si";

function Techstack() {
  const technologies = [
    { name: "PHP", icon: <DiPhp /> },
    { name: "Java", icon: <DiJava /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "React", icon: <DiReact /> },
    { name: "Bootstrap", icon: <DiBootstrap /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "Git", icon: <DiGit /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "Python", icon: <DiPython /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((technology) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons tech-flip-card"
          key={technology.name}
        >
          <div className="tech-flip-card-inner">
            <div className="tech-flip-face tech-flip-front">
              {technology.icon}
            </div>
            <div className="tech-flip-face tech-flip-back">
              <span>{technology.name}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
