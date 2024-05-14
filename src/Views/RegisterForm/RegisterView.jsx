import React from "react";
import "./RegisterView.css";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="loginbody">
      <div className="cursor"></div>
      <div className="wrapper">
        <form action="">
          <h1>Registrar-se</h1>
          <div className="input-box">
            <input type="text" placeholder="Nome" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Sobrenome" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="E-mail" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirmar Senha" required />
            <FaLock className="icon" />
          </div>
          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Mantenha-se conectado
            </label>
            <a href="#">Esqueci minha senha</a>
          </div> */}
          <button type="submit">Inscrever-se</button>
          <div className="register-link">
            <p>
              Já tem uma conta? <Link to="/login">Faça Login</Link><br /> <br /><br />
              <Link to="/">Página Inicial</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
