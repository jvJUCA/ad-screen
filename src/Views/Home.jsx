import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginButton from "../Components/LoginButton";
import "../index.css";

const Home = () => {
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

      <Container>
        <Row>
          <Col lg={8}>
            <div className="slogan">
              <p>
                Para todos que <br /> desejam anunciar <br /> seus produtos
                <span className="blinking">.</span>
              </p>
              <div className="div_login box">
                <Link to="/login">
                  <LoginButton />
                </Link>
              </div>
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
            <button className="buttonLanding">Quero Anunciar</button>
          </Col>
        </Row>
      </Container>

      <div className="card" style={{ marginTop: "100px" }}>
        <svg
          height="100%"
          width="100%"
          className="border"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
          <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
          <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
          <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
        </svg>
        <div className="logo">
          <svg
            className="logo-svg"
            viewBox="0 0 29.667 31.69"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="translate(0 0)"
              d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
            ></path>
            <path
              transform="translate(-45.91 0)"
              d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
            ></path>
            <path
              transform="translate(0 -51.963)"
              d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
