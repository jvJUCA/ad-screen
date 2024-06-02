import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingView from "../Views/LandingView.jsx";
import About from "../Views/About.jsx";
import Home from "../Views/HomeView/HomeView.jsx";
import Login from "../Views/LoginForm/LoginView.jsx";
import Register from "../Views/RegisterForm/RegisterView.jsx";

const Rotas = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Rotas;
