import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<RootLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="service" element={<Service />} />
        <Route path="reservation" element={<Reservations />} />
        <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
