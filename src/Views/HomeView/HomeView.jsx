import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./HomeView.css";
import "../../index.css";


const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar expand="lg">
        <span className="text-title mt-3 mb-5">Olá, Lucas</span>
        <Navbar.Collapse className="status">
          <Card
            onMouseOver={() => setShowMessage(true)}
            onMouseOut={() => setShowMessage(false)}
          >
            <Card.Body>
              <Card.Title className="text-card">Status  😁</Card.Title>
            </Card.Body>
          </Card>
          {showMessage && (
            <div className="message">
              Suas vendas estão decolando! 🚀💸
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>

      <Container>
        br
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="text-title">Painel de Controle</h2>
            <br /><br />
            <Row>
              <Col lg={4}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Total de Vendas</Card.Title>
                    <Card.Text className="card-green text-card">
                      <span style={{ color: 'black' }}>Junho:</span> 1,234
                    </Card.Text>
                    <Card.Text className="card-red text-card">
                      <span style={{ color: 'black' }}>Maio:</span> 806
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Aumento de Vendas</Card.Title>
                    <br />
                    <Card.Text className="card-green text-card">
                      115.2%
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Novos Clientes</Card.Title>
                    <br />
                    <Card.Text className="text-card">
                      123 📈
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            lg={7}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="text-subtitle">Anúncios Online</h2>
            <br />
            <img
              src="mapSorocity.svg"
              className="homeMap"
              alt="Map of Sorocity"
              fluid
            />

          </Col>
          <Col
            lg={5}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <br />
            <h2 className="text-subtitle">Hórarios com mais Visualizações</h2>
            <br />
            <img
              src="vendas.svg"
              className="vendas"
              alt="Vendas illustration"
              fluid
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12} className="d-flex justify-content-center">
            <button className="buttonHome mx-2">Aumentar Anúncios</button>
            <button className="buttonHome mx-2">Ver Relatório Completo</button>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Home;