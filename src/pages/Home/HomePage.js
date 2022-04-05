import React from "react";
import { homeObj } from "./Data";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <Hero {...homeObj} />
      </>
  );
}

export default HomePage;
