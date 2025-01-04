import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import DonorRegister from "./pages/DonorRegister";
import Navbar from "./components/Navbar"
import ReceiverRegister from "./pages/ReceiverRegister";
import Footer from "./components/Footer";
import OrganizationRegister from "./pages/OrganizationRegister";
import Login from "./pages/Login";
import About from "./pages/About";
import FindBlood from "./pages/FindBlood";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/findblood" element={<FindBlood />} />
        <Route path="/register/donor" element={<DonorRegister />} />
        <Route path="/register/receiver" element={<ReceiverRegister />} />
        <Route path="/register/organization" element={<OrganizationRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;



