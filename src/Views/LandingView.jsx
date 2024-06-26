import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginButton from "../Components/LoginButton";
import "../index.css";

const LandingView = () => {
  return (
    <div className="App">
      <div className="cursor"></div>
      <div className="landingImage">
        <Navbar expand="lg">
          <span className="text-title mt-3">AD'Screen</span>
          <div
            className="mx-2 mt-4"
            style={{ width: 2, height: 25, backgroundColor: "white" }}
          ></div>
          <span className="text-subtitle mt-4">Para empreendedores</span>
        </Navbar>
      </div>
      <div className="slogan div_login box">
        <Link to="/login">
          <LoginButton />
        </Link>
      </div>
      <Container style={{ marginBottom: "10vh" }}>
        <Row>
          <Col lg={8}>
            <div className="slogan">
              <p>
                Para todos que <br /> desejam anunciar <br /> seus produtos
                <span className="blinking">.</span>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="internText">
              <span>
                ou para aqueles que buscam otimizar a experiência de seu
                ambiente, nós somos a aplicação que possibilita os usuário
                divulgarem seus produtos em empresas locadoras paceiras. Ao
                contrário de anúncios convencionais e pouco efetivos, nosso
                produto melhora a eficiência dos anúncios bem como democratizar
                o acesso à eles.
              </span>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/login" className="buttonLanding">Quero Anunciar</Link>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="digitalSignage">
            <div className="cardDigital" style={{ marginTop: "50px" }}>
              <div className="logo">AD'Screen</div>
            </div>
          </div>
        </Col>
      </Row>

      <Container style={{ marginBottom: "100px" }}>
        <Row>
          <Col lg={6}>
            <div className="slogan-vendas">
              <p>
                Anunciantes que usam Ad´Screen notam um grande aumento de
                vendas!
              </p>
            </div>
            <div className="internText">
              <span>
                ou para aqueles que buscam otimizar a experiência de seu
                ambiente, nós somos a aplicação que possibilita os usuário
                divulgarem seus produtos em empresas locadoras paceiras. Ao
                contrário de anúncios convencionais e pouco efetivos, nosso
                produto melhora a eficiência dos anúncios bem como democratizar
                o acesso à eles.
              </span>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="grafico"></div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="map">
              <img src="mapPerson.svg" className="mapPerson" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="slogan-vendas">
              <p>Escolha a Localização Perfeita para o Seu Anúncio!</p>
            </div>
            <div className="internText">
              <span>
                Pontos turísticos, prédios comerciais, shoppings, eventos...
                Anuncie por localização e faça seu anúncio ser visto por todos
                da região! <br />
                <br /> Independente de faixa etária, social ou até mesmo
                financeira, com os anúncios por localização, você escolhe quando
                e onde quer anunciar. Com poucos cliques e muita eficiência!
              </span>
              <Col
                lg={12}
                className="d-flex justify-content-center align-items-center mt-4"
              >
                <Link to="/login" className="buttonLanding">Ver locais disponíveis</Link>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer"></div>
    </div>
  );
};

export default LandingView;
