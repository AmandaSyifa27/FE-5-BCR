import React from "react"
import Header from "../Components/Header";
import Service from "../Components/Service";
import Testimonial from "../Components/Testimonial";
import WhyUs from "../Components/WhyUs";
import Carousel from "../Components/Carousel";
import Card3 from "../Components/Card3";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Service />
      <WhyUs />
      <Testimonial />
      <Carousel />
      <Card3 />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
