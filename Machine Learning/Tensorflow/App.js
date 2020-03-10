import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [result, fixResult] = useState([0]);

  const myFirstNet = async () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    const r = async () => {
      model.fit(xs, ys).then(() => {
        const p = model.predict(tf.tensor2d([5], [1, 1]));
        fixResult(p.toString());
      });
    };

    await r();
  };

  const handleResult = async () => {
    await myFirstNet();
    if (result !== undefined) {
    }
  };

  const showResult = () => {
    if (result !== undefined) {
      return <h1>{result[0]}</h1>;
    } else {
      return <h1>{"wait"}</h1>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

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
