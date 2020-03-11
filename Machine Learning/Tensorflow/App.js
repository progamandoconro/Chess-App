import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [result, fixResult] = useState([0]);

  const [fiboNth, setFiboNth] = useState(Number(1));
  const dataX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dataY = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  const myFirstNet = async () => {
    const model = tf.sequential();

    model.add(
      tf.layers.dense({ units: 20, inputShape: [1], activation: "selu" })
    );

    model.add(tf.layers.dense({ units: 1, activation: "linear" }));

    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
    const xs = tf.tensor2d(dataX, [12, 1]);
    const ys = tf.tensor2d(dataY, [12, 1]);

    const r = async () => {
      model.fit(xs, ys).then(() => {
        const p = model.predict(tf.tensor2d([Number(fiboNth)], [1, 1]));
        fixResult(p.toString());
      });
    };

    await r();
  };

  const handleResult = async () => {
    await myFirstNet();
    if (result === undefined) {
      console.log("Please wait");
    }
  };

  const showResult = () => {
    if (result !== undefined) {
      return <h1>{result}</h1>;
    } else {
      return <h1>{"wait"}</h1>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="number"
          value={fiboNth}
          onChange={e => setFiboNth(e.target.value)}
        />

        <button
          onClick={() => {
            handleResult();
            showResult();
          }}
        >
          Net Calculate
        </button>
        {result}
      </header>
    </div>
  );
}

export default App;
