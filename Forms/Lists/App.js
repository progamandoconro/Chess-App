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
    const l = [];
    for (let i = 0; i < index; i++) {
      l.push(data[i]);
    }
    return (
      <div>
        {l.map((v, k) => {
          return <li key={k}> {v}</li>;
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <button onClick={(e) => showData(e)}> もって </button>
      {showList()}
    </div>
  );
}

export default App;
