import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../Components/Home.js";
import About from "../Components/About.js";
import User from "../Components/User.js";

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