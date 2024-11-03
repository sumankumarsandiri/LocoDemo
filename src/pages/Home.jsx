import React from "react";
import Header from "../components/Header";
// import SpecialityMenu from "../components/SpecialityMenu";
// import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import WhatWeDo from "../components/WhatWeDo";
import Middle from "../components/Middle";
import MiddleDown from "../components/MiddleDown";
import WhyLoco from "../components/WhyLoco";
import KeyFeatures from "../components/side/KeyFeatures";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SpecialityMenu /> */}
      <WhatWeDo />
      <Middle />
      <KeyFeatures />
      <Banner />
      <MiddleDown />
      <WhyLoco />
      {/* <TopDoctors /> */}
    </div>
  );
};

export default Home;
