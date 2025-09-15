import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Tekst from "../components/Teksti/Tekst";
import Swiper from "../components/Swiper/Swiper";
import Details from "../components/Details/Details";
import Offer from "../components/Offer/Offer";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Banner />
        <Tekst
          heading="Your Style.Your Sound."
          spec="Studio-grade acoustics that dissolve distractions and awaken clarity."
        />
        <Carousel />

        <Swiper />
        <Tekst
          heading="Every Detail Matters"
          spec="From the stitch to the signal, precision lives here."
        />
        <Details />
        <Offer />
        <Footer />
      </div>
    </>
  );
};

export default Home;
