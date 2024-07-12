import React from "react";

function Hero({ heroName }) {
  if (heroName === "Batman") {
    throw new Error("Not a Hero");
  }

  return <div>{heroName}</div>;
}

export default Hero;
