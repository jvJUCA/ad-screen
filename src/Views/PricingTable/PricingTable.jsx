import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/pricing-plan.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  mdiCubeOutline,
  mdiTrophy,
  mdiWalletGiftcard,
  mdiArrowLeftBottom,
} from "@mdi/js";
import Icon from "@mdi/react";

const PricingPlan = () => {
  return (
    <div className="App">
      <div className="cursor"></div>
      <Link to="/">
        {" "}
        <Icon
          path={mdiArrowLeftBottom}
          size={2}
          color={"red"}
          className="exitArrow"
        />
      </Link>

      <Container>
        <h1
          className="text-center pricing-table-title"
          style={{ color: "white" }}
        >
          Preços para Anunciar
        </h1>
        <Row>
          <Col md={4}>
            <Card className="pricing-card pricing-plan-basic">
              <Card.Body>
                <Icon
                  path={mdiCubeOutline}
                  size={2}
                  className="pricing-plan-icon"
                />
                <p className="pricing-plan-title">Básico</p>
                <h3 className="pricing-plan-cost ml-auto">R$89</h3>
                <ul className="pricing-plan-features">
                  <li>Locais Selecionados</li>
                  <li>4 Horas de Anuncio Diário</li>
                  <li>Anuncios apenas 3 dias</li>
                  <li>2 anuncios diferentes</li>
                </ul>
                <Button href="/Home" className="pricing-plan-purchase-btn">
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pricing-card pricing-card-highlighted pricing-plan-pro">
              <Card.Body>
                <Icon path={mdiTrophy} size={2} className="pricing-plan-icon" />
                <p className="pricing-plan-title">Pro</p>
                <h3 className="pricing-plan-cost ml-auto">R$249</h3>
                <ul className="pricing-plan-features">
                  <li>Várias localizações</li>
                  <li>12 Horas de Anuncio Diário</li>
                  <li>Anuncios Seg a Sex</li>
                  <li>5 Anuncios diferentes</li>
                </ul>
                <Button href="#!" className="pricing-plan-purchase-btn">
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pricing-card pricing-plan-enterprise">
              <Card.Body>
                <Icon
                  path={mdiWalletGiftcard}
                  size={2}
                  className="pricing-plan-icon"
                />
                <p className="pricing-plan-title">Premium</p>
                <h3 className="pricing-plan-cost ml-auto">R$549</h3>
                <ul className="pricing-plan-features">
                  <li>Qualquer localização</li>
                  <li>24 Horas de Anuncio Diário</li>
                  <li>Todos os dias da semana</li>
                  <li>10 Anuncios diferentes</li>
                </ul>
                <Button href="#!" className="pricing-plan-purchase-btn">
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingPlan;
