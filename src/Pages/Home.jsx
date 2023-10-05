import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Container/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;
