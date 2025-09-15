import React from "react";
import Tekst from "../components/Teksti/Tekst";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";

const Compare = () => {
  return (
    <div className="container">
      <Header />
      <div className="compare">
        <Tekst
          heading="Compare Resonance Models"
          spec="Get help choosing. Chat with a Specialist."
        />
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
