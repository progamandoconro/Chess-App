import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [result, fixResult] = useState([0]);

  const [number, setNumber] = useState(Number(1));
  const [hidden, setHidden] = useState(Number(1));

  const dataX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dataY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const myFirstNet = async () => {
    const model = tf.sequential();

    model.add(
      tf.layers.dense({
        units: Number(hidden),
        inputShape: [1],
        activation: "linear"
      })
    );

    model.add(tf.layers.dense({ units: 1, activation: "linear" }));

    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
    const xs = tf.tensor2d(dataX, [12, 1]);
    const ys = tf.tensor2d(dataY, [12, 1]);

    const r = async () => {
      model.fit(xs, ys, { epochs: 5 }).then(() => {
        const p = model.predict(tf.tensor2d([Number(number)], [1, 1]));
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

        <h5>Number to predict</h5>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />

        <h5>Hidden layer</h5>
        <input
          type="number"
          value={hidden}
          onChange={e => setHidden(e.target.value)}
        />

        <br />

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
