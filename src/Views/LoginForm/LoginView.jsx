import React from "react";
import "./LoginView.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="loginbody">
      <div className="cursor"></div>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="E-mail" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Mantenha-se conectado
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>
          <Link to="/Home">
            <button type="submit">Login</button>
          </Link>
          <div className="register-link">
            <p>
              Não tem uma conta? <Link to="/register">Registre-se</Link>
              <br /> <br />
              <br />
              <Link to="/">Página Inicial</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
