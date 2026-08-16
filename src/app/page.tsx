import React from "react";
import Navbar from "./components/Resusable_components/Navbar";
import Footer from "./components/Resusable_components/Footer";
import HomePage from "./components/HomePage/HomePage";
import "./page.css";

export default function MainPage() {
  return (
    <div className="Port_MainPage">
      <Navbar />

      <HomePage />

      <Footer />
    </div>
  );
}