import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sustainability from "./components/Sustainability";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Sustainability />
      <Footer />
    </div>
  );
};

export default App;
