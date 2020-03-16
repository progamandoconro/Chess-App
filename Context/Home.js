import React, { useState, useContext } from "react";
import { myContext } from "./myContext";

function Home() {
  const [userName, setUserName] = useState("");

  const [value, setValue] = useContext(myContext);
  const handleInput = e => {
    setUserName(e);
    setValue(e);
  };

  return (
    <div>
      <h2>Home</h2>
      <input value={userName} onChange={e => handleInput(e.target.value)} />
      <br />
      <h1> {userName}</h1>
      <h1>{value}</h1>
    </div>
  );
}

export default Home;
