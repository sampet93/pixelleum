import React, { useState } from "react";
import ToolboxButton from "./ToolboxButton";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/toolbox.css";

const Toolbox = (props) => {
  const [selectedTool, setSelectedTool] = useState("pen");
  const clickHandler = (e) => {};
  const tools = ["pen", "picker", "bucket", "empty"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "1vh",
        marginBottom: "1vh",
      }}
    >
      <Container>
        <Row xs="auto" className="justify-content-sm-center g-1" style={{}}>
          <Col>
            <ToolboxButton tool="pen" selected={true} />
          </Col>
          <Col>
            <ToolboxButton tool="picker" selected={false} />
          </Col>
          <Col>
            <ToolboxButton tool="bucket" selected={false} />
          </Col>
          <Col>
            <ToolboxButton tool="pen" selected={false} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Toolbox;
