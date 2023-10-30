import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Container/Layout";
import Features from "../Components/Features";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  );
};

export default Home;
