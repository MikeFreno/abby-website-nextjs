import React from "react";
import ArrowButton from "../components/ArrowButton";
import CommercialWork from "../components/Commercial_Work";
import ContactMe from "../components/ContactMe";
import Film from "../components/Film";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Photography from "../components/Photography";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Abigail Weinick | Home </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="body">
        <Header color="white" />
        <Intro />
        <Film />
        <CommercialWork />
        <Photography />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
