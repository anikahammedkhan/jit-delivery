import React from "react";
import Hero from "../../Components/HomePage/Hero";
import Form from "../../Components/HomePage/Form";
import Details from "../../Components/HomePage/Details";
import WhyChoseUs from "../../Components/HomePage/WhyChoseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Form /> */}
      <Details />
      <WhyChoseUs />
    </div>
  );
};

export default Home;
