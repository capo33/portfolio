import React from "react";
import { homeObj, homeTwo } from "./Data";
import Hero from "./Hero";
import MainHero from "./MainHero";

function HomePage() {
  return (
    <>
      {/* <MainHero {...homeTwo} /> */}
      <Hero {...homeObj} />
      </>
  );
}

export default HomePage;
