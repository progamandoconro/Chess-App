import React, { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const data = [
    "Luis",
    "Maria",
    "Pepe",
    "Juan",
    "Teresa",
    "Ramon",
    "Monica",
    "Rebeca",
    "Juan",
  ];

  const showData = () => {
    if (index > data.length - 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const showList = () => {
    return <li> Nombre: {data[index]}</li>;
  };

  return (
    <div className="App">
      <button onClick={(e) => showData(e)}> もって </button>
      {showList()}
    </div>
  );
}

export default App;
