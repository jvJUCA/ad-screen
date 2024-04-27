import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../Views/Home.jsx";
import About from "../Views/About.jsx";
import User from "../Views/User.jsx";

const Rotas = () => {
    return (
        <>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/User" element={<User />} />
           </Routes>
        </>
     );
}

const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})
export default Rotas;