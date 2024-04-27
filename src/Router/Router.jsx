import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Views/Home.jsx";
import About from "../Views/About.jsx";
import User from "../Views/User.jsx";

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
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/User" element={<User />} />
           </Routes>
        </>
     );
}

export default Rotas;
