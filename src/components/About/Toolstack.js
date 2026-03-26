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
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "WordPress", icon: <SiWordpress /> },
    { name: "Symfony", icon: <SiSymfony /> },
    { name: "CodeIgniter", icon: <SiCodeigniter /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics /> },
    { name: "AWS", icon: <SiAmazonaws /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons tech-flip-card" key={tool.name}>
          <div className="tech-flip-card-inner">
            <div className="tech-flip-face tech-flip-front">{tool.icon}</div>
            <div className="tech-flip-face tech-flip-back">
              <span>{tool.name}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
