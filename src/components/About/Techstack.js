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
import ReactTooltip from "react-tooltip";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="TensorFlow">
        <SiTensorflow />
      </Col>
      <ReactTooltip place="top" type="dark" effect="float" />
    </Row>
  );
}

export default Techstack;
