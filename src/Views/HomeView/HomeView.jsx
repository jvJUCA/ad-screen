import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import "./HomeView.css";
import "../../index.css";

const Home = () => {
  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar expand="lg">
        <span className="text-title mt-3 mb-5">AD'Screen</span>
      </Navbar>

      <Container>
        <Row>
          <Col
            lg={7}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src="mapSorocity.svg"
              className="homeMap"
              alt="Map of Sorocity"
              fluid
            />
            <button className="buttonHome align-self-start mt-4" style={{ marginLeft: '7%'}}>Quero Anunciar</button>
          </Col>
          <Col
            lg={5}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src="vendas.svg"
              className="vendas"
              alt="Vendas illustration"
              fluid
            />
            <button className="buttonHome align-self-start mt-4" style={{ marginLeft: '13%'}}>Quero Anunciar</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
