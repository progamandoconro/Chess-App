import React, { useContext, useState } from "react";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [myState, setMyState] = useState("");
  const myContext = React.createContext(myState);
  const value = useContext(myContext);
  const [result, fixResult] = useState([0]);

  const myFirstNet = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    model.fit(xs, ys).then(() => {
      model.predict(tf.tensor2d([5], [1, 1])).print();
    });
  };

  const handleResult = () => {
    myFirstNet();
    if (result !== undefined) {
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
      <header className="App-header" />
        <input value={myState} onChange={e => setMyState(e.target.value)} />
        <h1>{value}</h1>

        <button
          onClick={() => {
            handleResult();
            showResult();
          }}
        >          
          Net Calculate
        </button>
        {showResult()}
      </header>
    </div>
  );
}

export default App;