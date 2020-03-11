import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [result, fixResult] = useState([0]);
  const [fiboData, setFiboData] = useState([0]);
  const [showData, setShowData] = useState([0]);

  const [fiboNth, setFiboNth] = useState(Number(1));
  const [hidden, setHidden] = useState(Number(1));

  const dataX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dataY = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  const dataFull = () => {
    if (Number(fiboData) <= 2) setShowData(1);
    else {
      const f = [0, 1, 1];
      for (let i = 3; i <= Number(fiboData); i++) {
        f[i] = f[i - 1] + f[i - 2];
      }

      setShowData(f[f.length - 1]);
    }
  };

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
        <h5>Data Length</h5>
        <input
          type="number"
          value={fiboData}
          onChange={e => setFiboData(e.target.value)}
        />
        {showData}

        <h5>Number to predict</h5>
        <input
          type="number"
          value={fiboNth}
          onChange={e => setFiboNth(e.target.value)}
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
            dataFull();
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
