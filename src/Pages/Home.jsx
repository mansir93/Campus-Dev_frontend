import React from "react";
import Hero from "../Components/Hero";
import SecondSection from "../Components/LandingPageSection2"
import Layout from "../Container/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <SecondSection />
      </Layout>
    </div>
  );
};

export default Home;
