import React, { useContext } from "react";
import { myContext } from "./myContext";

function About() {
  const value = useContext(myContext);

  return (
    <div>
      <h2>About</h2>
      <h1>{value}</h1>
    </div>
  );
}

export default About;
