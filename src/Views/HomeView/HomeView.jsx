import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import "./HomeView.css";
import "../../index.css";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar expand="lg">
        <span className="text-title mt-3 mb-5">Olá, Usuário(a)</span>
        <Navbar.Collapse className="status">
          <Card
            onMouseOver={() => setShowMessage(true)}
            onMouseOut={() => setShowMessage(false)}
          >
            <Card.Body>
              <Card.Title className="text-card">Status 😁</Card.Title>
            </Card.Body>
          </Card>
          {showMessage && (
            <div className="message">Suas vendas estão decolando! 🚀💸</div>
          )}
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="text-title">Painel de Controle</h2>
            <br />
            <br />
            <Row>
              <Col lg={4}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Total de Vendas</Card.Title>
                    <Card.Text className="card-green text-card">
                      <span style={{ color: "black" }}>Junho:</span> 1,234
                    </Card.Text>
                    <Card.Text className="card-red text-card">
                      <span style={{ color: "black" }}>Maio:</span> 806
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
                    <Card.Text className="text-card">123 📈</Card.Text>
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
            <button
              onClick={() => (window.location.href = "/Pricing")}
              className="buttonHome mx-2"
            >
              Aumentar Anúncios
            </button>
            <button
              className="buttonHome mx-2"
              onClick={() => setShowForm((prevState) => !prevState)}
            >
              Criar Novo Anúncio
            </button>
          </Col>
        </Row>
        {showForm && (
          <Row className="mt-4">
            <Col lg={12} className="d-flex justify-content-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="nomeAnuncio" className="form-label">
                    Nome do Anúncio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    id="nomeAnuncio"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="duracaoSegundos" className="form-label">
                    Duração em (s)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Duração do seu Anúncio"
                    id="duracaoSegundos"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tempoDias" className="form-label">
                    Qual período?
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantos dias?"
                    id="tempoDias"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="localizacao" className="form-label">
                    Localização em sua Cidade
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Qual Área?"
                    id="localizacao"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="arquivo" className="form-label">
                    Upload de Arquivo
                  </label>
                  <input type="file" className="form-control" id="arquivo" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </Col>
          </Row>
        )}

        <Row className="mt-4">
          <Col lg={12} className="d-flex justify-content-center">
            <a
              href="https://www.dropbox.com/scl/fi/8c0xqdeekebg7qpcxwne3/digital_signage_accesses_example-2.xlsx?dl=1"
              download="Ad-Screen-Relatorio.xlsx"
              className="buttonHome"
            >
              Visualizar Relatório Completo
            </a>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </div>
  );
};

export default Home;
