import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCodeigniter,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiWordpress,
  SiSymfony,
  SiGoogleanalytics,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Toolstack;
