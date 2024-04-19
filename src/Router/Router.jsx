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

export default Rotas;