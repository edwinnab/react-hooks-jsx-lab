import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1>{name} is a web developer from {city}</h1>
  </div>;
}

export default Home;
