import React from "react";
import NavBar from "../../components/NavBar/NavBar.js"
import Footer from "../../components/Footer/Footer.js"
import Recommended from "../../components/Recommended/Recommended.js";
import Landing from "../../components/Landing/Landing.js";
import Campings from "../../components/Campings/Campings.js";

function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Campings />
      <Recommended />
      
      <Footer />
    </>
  );
}

export default Home;
